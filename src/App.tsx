import React, { useState, useRef, useEffect, FormEvent } from "react";
import axios from "axios";
import img from "./components/images.png";

const askBackendUrl = process.env.REACT_APP_ASK_BACKEND_URL_PYTHON;

interface Message {
  sender: "user" | "bot";
  text: string;
  imageUrl?: string; // Optional image URL property
}

const ChatApp: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    const userMessage: Message = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        `${askBackendUrl}/ask`,
        { question: userInput },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage: Message = {
        sender: "bot",
        text: response.data.response,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        sender: "bot",
        text: "Sorry, there was an error. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setUserInput("");
  };

  const toggleListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = async (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);

        // Send the transcribed text to the backend
        try {
          const response = await axios.post(
            `${askBackendUrl}/ask`,
            { question: transcript },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const botMessage: Message = {
            sender: "bot",
            text: response.data.response,
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);

          // Convert bot's response to speech
          const speechSynthesis = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(botMessage.text);
          speechSynthesis.speak(utterance);
        } catch (error) {
          console.error("Error:", error);
          const errorMessage: Message = {
            sender: "bot",
            text: "Sorry, there was an error. Please try again.",
          };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
      };

      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };
  const handleImageRequest = async () => {
    if (!userInput.trim()) return; // Don't process empty inputs

    try {
      // Send a POST request to generate an image based on the user's input
      const response = await axios.post(
        `${askBackendUrl}/generate-image`, // Make sure this is your image generation endpoint
        { prompt: userInput }, // Pass the user's input as the prompt
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the generated image URL from the response
      const imageUrl = response.data.image_url;

      // Create a new bot message with the image URL
      const botMessage: Message = {
        sender: "bot",
        text: "Here is your generated image:",
        imageUrl, // Add the image URL to the message
      };

      // Update the messages state to show the new message
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);

      // In case of an error, display an error message
      const errorMessage: Message = {
        sender: "bot",
        text: "Sorry, there was an error generating the image. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col justify-between">
      <div className="flex flex-row align-middle justify-center w-full mt-5">
        <img src={img} alt="Highlander Logo" className="max-w-xs" />
      </div>

      {/* Chat Bot */}
      <div className="flex-1 overflow-y-auto flex flex-col justify-end mb-10">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl p-6 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 mb-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-900 self-end"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <div className="text-lg">{msg.text}</div>
                {msg.imageUrl && (
                  <img src={msg.imageUrl} alt="Generated" className="mt-2" />
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Type a message..."
              rows={1}
              style={{ overflow: "hidden" }}
            />
            {/* Voice Talk Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
            <button
              type="button"
              onClick={toggleListening}
              className="px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              {isListening ? "Stop Listening" : "Voice Talk"}
            </button>
            <button
              type="button"
              onClick={handleImageRequest} // Call the image request handler
              className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
