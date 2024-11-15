import React, { useState, useEffect } from "react";
import img from "./8dbb9882-513d-41ec-af94-c4df72690603.jpg";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";

const Stuff = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "AI To Help You!",
    "To Help Solve Conflicts",
    "To Solve Order Problems",
    "To Provide Recommendations",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Heading text above image with smooth transition */}
      <div className="mb-16 text-center h-12 flex items-center justify-center">
        <AnimatePresence>
          <motion.h1
            key={currentTextIndex}
            className="text-4xl font-bold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              whiteSpace: "nowrap",
            }}
          >
            {texts[currentTextIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Image with overlay button */}
      <div className="relative group">
        <img
          className="transition-all duration-300 ease-in-out hover:blur-sm"
          src={img}
          alt="Stuff"
          width={500}
          height={500}
        />
        <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 text-white font-semibold p-4 transition-opacity duration-300 ease-in-out">
          New Feature
        </button>
      </div>
    </div>
  );
};

export default Stuff;
