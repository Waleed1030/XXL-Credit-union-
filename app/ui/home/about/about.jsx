import React from "react";
import "./about.scss";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_img">
        <Image src="/about.jpg" alt="" width={600} height={100} />
      </div>

      <div className="main_text">
        <p>ABOUT US</p>
        <span>We are here to manage your finance with experience.</span>
        <p>
          Blue Pheonix Bank was designed for those who demand banking that's
          dramatically better than what they’ve experienced in the past. Our
          innovative methods and products keep pace with your life and your
          business.
        </p>

        <p>
          Our hyper-focused associates respond with the resources you need
          anytime you reach a review point you’ll end up reviewing and
          negotiating the content itself and not the design
        </p>

        <p>
          Our vision is to be one of the highest performing banking companies
          among the fifty largest in the United Kingdom.
        </p>
      </div>
    </div>
  );
};

export default About;
