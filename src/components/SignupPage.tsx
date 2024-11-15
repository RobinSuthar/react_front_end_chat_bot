import React from "react";
import Header from "./Header"; // Import Header
import Footer from "./Footer"; // Import Footer
import { Link } from "react-router-dom"; // Adjust the import path as necessary

const SignupPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="mt-12 text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-6">
          Join My Journey as a Developer!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Hi, I’m Robin Suthar, a passionate software development student at
          SAIT. I’m constantly learning, building, and evolving as a developer.
          Signing up means you’ll be part of my growth, offering your support
          and encouragement as I work on new projects and expand my skills.
        </p>

        {/* What I Do Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">What I Do</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            As a developer, I’m passionate about creating software that solves
            real-world problems. My projects, such as *Chatbout* and *Family
            Travel Tracker*, are just the beginning. I love exploring new
            technologies, improving my coding practices, and challenging myself
            to grow in the tech field.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            But this journey is just starting, and your support means a lot.
            When you sign up, you’ll be helping me stay motivated to push my
            boundaries, learn new things, and keep building impactful projects.
          </p>
        </div>

        {/* How Signing Up Helps Me */}
        <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105 mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            How Signing Up Helps
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Your sign-up is a way for you to show your support for my
            development as a programmer. With your encouragement, I can continue
            to focus on:
          </p>
          <ul className="text-lg text-gray-700 mb-4 list-disc list-inside">
            <li>
              Improving my technical skills and learning new languages and
              frameworks.
            </li>
            <li>
              Building projects that aim to make a difference, like my current
              work in React Native and full-stack development.
            </li>
            <li>
              Staying inspired and motivated to keep growing as a developer.
            </li>
          </ul>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Your sign-up will not only support my projects, but it will also
            motivate me to continue learning and sharing my progress with you.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed"></p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-8 gap-9">
          <Link
            to="/"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Back
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignupPage;
