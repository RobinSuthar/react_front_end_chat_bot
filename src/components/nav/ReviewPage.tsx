import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const ReviewPage = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [wantsUpdates, setWantsUpdates] = useState<boolean>(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      try {
        const feedbackData = {
          feedback,
          email: isAnonymous ? "" : email, // Do not include email if anonymous
          isAnonymous,
          wantsUpdates,
        };

        const response = await fetch("http://localhost:3000/submit-feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        });

        if (response.ok) {
          alert("Thank you for your feedback!");
          setFeedback("");
          setEmail("");
          setIsAnonymous(false);
          setWantsUpdates(false);
        } else {
          alert("There was an error submitting your feedback.");
        }
      } catch (error) {
        alert("Error submitting feedback. Please try again.");
      }
    } else {
      alert("Please provide some feedback before submitting.");
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Header />
      <div className="flex justify-center mt-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Feedback Matters
        </h1>
      </div>
      <div className="mt-12 text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-6">
          Share Your Thoughts and Help Us Improve!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          We value your input. Whether it’s about our services, website, or
          anything else, your feedback is important to us. Please take a moment
          to share your thoughts!
        </p>

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
                placeholder="Your email "
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Why Your Feedback Matters
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Feedback helps us improve our services, products, and overall
              experience. Whether you have suggestions, praise, or concerns,
              we’re eager to hear from you. Every piece of feedback makes us
              better!
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Our Commitment
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              We are committed to making continuous improvements based on your
              feedback. Your voice shapes the direction of our projects and
              helps us achieve excellence. Thank you for being part of our
              journey!
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-9">
          <Link
            to={"/"}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Back to Home
          </Link>
          <Link
            to={"/App"}
            className="bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-orange-700"
          >
            Visit Projects
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
