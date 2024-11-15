import React, { useState } from "react";
import Header from "./Header"; // Import Header
import Footer from "./Footer"; // Import Footer
import { Link } from "react-router-dom";

const bchatBackendUrl = process.env.REACT_APP_BCHAT_BACKEND_URL_JAVASCRIPT;

const ReviewPage = () => {
  // State for feedback, email, and checkbox options
  const [feedback, setFeedback] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [wantsUpdates, setWantsUpdates] = useState<boolean>(false);

  // Handle feedback form submission
  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Send feedback to the backend
      try {
        const response = await fetch(`${bchatBackendUrl}/submit-feedback`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            feedback,
            email,
            isAnonymous,
            wantsUpdates,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Thank you for your feedback!");
          // Clear the form after submission
          setFeedback(""); // Clear the feedback input
          setEmail(""); // Clear the email input
          setIsAnonymous(false); // Reset anonymity
          setWantsUpdates(false); // Reset updates option
        } else {
          alert(
            "There was an error submitting your feedback. Please try again."
          );
        }
      } catch (error) {
        console.error("Error sending feedback:", error);
        alert("Error submitting feedback. Please try again.");
      }
    } else {
      alert("Please provide some feedback before submitting.");
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex justify-center mt-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Feedback Matters
        </h1>
      </div>

      {/* Main Content */}
      <div className="mt-12 text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-6">
          Share Your Thoughts and Help Us Improve!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          We value your input. Whether it’s about our services, website, or
          anything else, your feedback is important to us. Please take a moment
          to share your thoughts!
        </p>

        {/* Feedback Form */}
        <form onSubmit={handleFeedbackSubmit} className="space-y-6">
          <div className="text-left">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write your feedback here..."
              rows={6}
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
              className="w-5 h-5"
            />
            <label className="text-sm text-gray-600">Submit anonymously</label>
          </div>

          {!isAnonymous && (
            <div className="text-left">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
          )}

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={wantsUpdates}
              onChange={() => setWantsUpdates(!wantsUpdates)}
              className="w-5 h-5"
            />
            <label className="text-sm text-gray-600">
              Sign up for new updates and blog posts
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReviewPage;
