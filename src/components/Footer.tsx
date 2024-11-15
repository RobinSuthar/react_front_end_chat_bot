import React from "react";
import "../App.css"; // Ensure this path is correct for your project
import img from "./logoh.jpg";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-4">
              <img src={img} height={100} width={100} alt="" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Shop</h3>
              <ul>
                <li>Explore Wine</li>
                <li>Explore Spirits</li>
                <li>Explore Beer & More</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Featured Deals</h3>
              <ul>
                <li>Frequently Asked Questions</li>
                <li>Shipping & Returns</li>
                <li>Corporate Programme</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Useful Links</h3>
              <ul>
                <li>Online Ordering</li>
                <li>Give Back Online Sale</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Contact</h3>
              <ul>
                <li>Visit a store</li>
                <li>Phone: (403) 640-6220</li>
                <li>Email: Contact us online</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <p className="footer-text text-center">
              Made by @ Robin | Made Just for Learning purpose
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
