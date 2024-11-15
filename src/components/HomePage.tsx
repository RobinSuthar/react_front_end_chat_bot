import React from "react";
import Footer from "./Footer";
import img from "./images.png";
import Header from "./Header";
import { Link } from "react-router-dom"; // Adjust the import path as necessary
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App"; // Adjust the import path as necessary
import NewPage from "./NewPage";

const HomePage: React.FC = () => {
  const handleRedirect = () => {
    window.location.href = "https://highlanderwine.com";
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <img src={img} alt="" />
      </div>
      <div>
        <div className="mt-12 text-center">
          <h1 className="text-6xl font-bold text-black-700 drop-shadow-">
            Welcome to the Ultimate Highlander Experience!
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore personalized wine recommendations, creative image
            generation, and voice-activated conversations – all in one place.
          </p>
        </div>
      </div>
      <div>
        <Header></Header>
      </div>
      <div className="flex justify-around m-8 gap-3">
        <div className="flex justify-around gap-8 m-8 bg-white-300">
          {/* What's Happening */}
          <div className="bg-white shadow-2xl rounded-lg max-w-2xl p-8 mt-12 text-center flex-1 flex flex-col">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              What's Happening?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This project is a fusion of my love for tech and taste. With it,
              you’ll receive personalized wine recommendations, enjoy unique
              AI-generated images based on your preferences, and even interact
              with a virtual assistant through voice commands. It’s a digital
              journey through wine and creativity! This is just a concept; for
              real products and experiences, check out Real website.
            </p>
            <button
              onClick={handleRedirect}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg mt-auto hover:bg-blue-700"
            >
              Website
            </button>
          </div>

          {/* Who Am I */}
          <div className="bg-white shadow-lg rounded-lg max-w-2xl p-8 mt-12 text-center flex-1 flex flex-col">
            <h1 className="text-3xl font-bold text-orange-500 mb-4">
              Who Am I?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hi, I'm Robin! I’ve been working at Highlander Wine & Spirits for
              about a year now and am also studying software development at
              SAIT. This project reflects my journey in blending tech skills
              with my passion for wine, creating a platform that’s both
              educational and interactive.
            </p>
            <Link
              to={"/NewPage"}
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg mt-auto hover:bg-orange-600"
            >
              Learn More About Me
            </Link>
          </div>

          {/* How to Start */}
          <div className="bg-white shadow-lg rounded-lg max-w-2xl p-8 mt-12 text-center flex-1 flex flex-col">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              How to Start?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ready to explore? Just start by choosing an option: try out the
              wine recommendation feature, request an AI-generated image, or
              have a conversation with the assistant. Dive in and see what this
              unique experience has to offer!
            </p>
            <Link
              to={"/FormPage"}
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg mt-auto hover:bg-green-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
