import React from "react";
import Header from "./Header"; // Import Header
import Footer from "./Footer"; // Import Footer
import { Link } from "react-router-dom";

const NewPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex justify-center mt-8"></div>

      {/* Main Content */}
      <div className="mt-12 text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-6">
          Discover My Journey of Technology and Taste!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Hi, I'm Robin Suthar! I’m a passionate software development student at
          SAIT with a keen interest in both technology and the world of wine.
          Here’s a glimpse into my journey.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Academic and Tech Skills */}
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Academic Background & Tech Skills
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              I'm a software development student at SAIT, where I find the field
              exhilarating. My technical skills include JavaScript, C#, Python,
              MAUI.NET, Expo Router, HTML, CSS, Oracle 21c, and object-oriented
              programming. I also have a solid understanding of UX/UI and Excel.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              I’m currently developing projects like *Chatbout* and the *Family
              Travel Tracker*, and I strive to follow best practices, preferring
              efficient solutions that avoid `DOMContentLoaded` events.
            </p>
          </div>

          {/* Work Experience */}
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Work Experience
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              I have been a sales associate at Highlander Wine & Spirits in
              Calgary for a year, where I specialize in customer management and
              product sales. Working alongside Brad, Jeswin, and Kat, I’ve
              gained expertise in making profitable product recommendations.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              I also work part-time at Crown Liquor and have applied to various
              roles at Rogers, Scotiabank, and the Apple Store to expand my
              career in both tech and customer service.
            </p>
          </div>

          {/* Projects & Achievements */}
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Projects & Achievements
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              My current projects include *Chatbout*, a website for interactive
              conversations using the ChatGPT-4 API, and a UML design assignment
              on the SafeHome system. I also edit and format team-related
              documentation with meticulous care.
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              In my React Native project, I'm integrating a login component with
              PostgreSQL, showcasing my full-stack development skills.
            </p>
          </div>

          {/* Personal Interests */}
          <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Personal Interests
            </h2>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              I love cooking and always bring delicious food to potlucks, often
              using my favorite knife. I’m also a self-proclaimed nerd about
              something outside of knives and cooking!
            </p>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              My Highlander Wine project merges my love for tech and wine. It's
              a concept offering personalized wine recommendations, AI-generated
              images, and voice-activated experiences. For real products, check
              out our store!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className=" flex justify-center mt-8 gap-9">
          <Link
            to={"/"}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Back
          </Link>
          <Link
            to={"/FormPage"}
            className="bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-orange-700"
          >
            Project
          </Link>
          <Link
            to={"/Review"}
            className="bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-Yellow-700"
          >
            Review
          </Link>
          <Link
            to={"/SignUp"}
            className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-green-700"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewPage;
