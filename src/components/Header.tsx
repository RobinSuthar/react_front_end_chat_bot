import React from "react";
import img from "./nav/25231.png";
import img2 from "./nav/gmail_icon-icons.webp";
import img3 from "./nav/x-new-twitter-logo-free-png.webp";
import img4 from "./nav/2018_social_media_popular_app_logo_linkedin-512.webp";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly mt-8">
        <div>
          <a href="https://github.com/RobinSuthar">
            <img src={img} alt="GitHub" height={80} width={80} />
          </a>
        </div>
        <a
          href="mailto:robinsuthar.sd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img2}
            alt="Gmail"
            height={80}
            width={80}
            title="Email: robinsuthar.sd@gmail.com"
          />
        </a>
        <a
          href="
        https://x.com/RobinSutharSd"
        >
          {<img src={img3} alt="" height={80} width={80} />}
        </a>
        <a
          href="
        https://www.linkedin.com/in/robin-suthar-6b2a2a183/"
        >
          {<img src={img4} alt="" height={80} width={80} />}
        </a>
      </div>
    </div>
  );
};

export default Header;
