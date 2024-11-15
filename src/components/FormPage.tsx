import React from "react";
import Header from "./Header"; // Import Header
import Footer from "./Footer"; // Import Footer
import { Link } from "react-router-dom";
const InstructionPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex justify-center mt-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Your Learning Assistant
        </h1>
      </div>

      {/* Main Content */}
      <div className="mt-12 text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-6">
          How to Use the App
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          This app is a tool designed to help you explore topics and find
          resources. Whether you're looking for suggestions, creative ideas, or
          need a virtual assistant, we aim to make your experience enjoyable and
          educational.
        </p>

        {/* Instructions */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Getting Started
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Begin by selecting an option from the homepage. You can explore
              our wine recommendation feature, request AI-generated images, or
              chat with the assistant for learning purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Using Responsibly
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This app is built for learning and experimentation. Please use the
              features respectfully and avoid excessive requests to ensure a
              smooth experience. Remember, this is a conceptual tool and not
              intended for professional advice or recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Note</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This application is created for educational purposes only. Data is
              collected responsibly to improve functionality and user
              experience. Thank you for helping us make this project a
              successful learning journey!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-9">
        <Link
          to="/App"
          className="bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-orange-700"
        >
          Agree
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InstructionPage;
