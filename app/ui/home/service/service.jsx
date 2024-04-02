import React from "react";
import "./service.scss";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <div className="first_container" id="services">
        <div className="img">
          <Image
            src="/serve.png"
            width={800}
            height={1000}
            className="rounded-xl"
          />
        </div>
        <div className="text_column">
          <div>
            <span>Who We Serve</span>
            <p>
              Established businesses, brand-new startups and everything in
              between. We serve ALL company types and industries including:
            </p>
          </div>
          <div className="list">
            <div className="item">
              <FaCheckCircle /> Consulting & Advisory
            </div>
            <div className="item">
              <FaCheckCircle /> Real Estate & Construction
            </div>
            <div className="item">
              <FaCheckCircle /> Design & Marketing Services
            </div>
            <div className="item">
              <FaCheckCircle /> Financial Services
            </div>
            <div className="item">
              <FaCheckCircle /> Pharma, Health, & Wellness
            </div>
            <div className="item">
              <FaCheckCircle /> SaaS Companies & Startups
            </div>
            <div className="item">
              <FaCheckCircle />
              eCommerce, Retail & Distribution
            </div>
            <div className="item">
              <FaCheckCircle /> Software & App Development
            </div>
            <div className="item">
              <FaCheckCircle /> Transportation
            </div>
            <div className="item">
              <FaCheckCircle /> Manufacturing
            </div>
          </div>
        </div>
      </div>

      <div className="second_container">
        <div className="text_column">
          <span>Welcome U.S. and Canadian Businesses</span>

          <p>
            Get your free U.S. and Canadian checking accounts. Get free global
            EUR and GBP accounts. Turbo charge your banking with instant
            transfers between USD / CAD and other currencies.
          </p>

          <p>
            Business owner(s) residing abroad? No problem! Open your checking
            account completely online.
          </p>

          <a href="/signup">
            <div className="primary_btn">Get Started</div>
          </a>
        </div>
        <Image src="/map.png" width={800} height={1000} className="img" />
      </div>

      <div className="third_container">
        <Image src="/payment.png" width={800} height={1000} className="img" />
        <div className="text_column">
          <span>Easily integrate with services you already use</span>

          <p>Blue Phoenix links with payment gateways and online stores.</p>

          <p>
            We also work with the most trusted payroll solutions on the market.
          </p>

          <a href="/signup">
            <div className="primary_btn">Get Started</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Service;
