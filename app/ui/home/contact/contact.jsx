"use client"
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("portfolio_emails", "", form.current, "")
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-5 py-10 bg-[--bg] flex items-center flex-1 w-full flex-col " id="contact">
      <h2 className="text-[1.5rem] md:text-[2.5rem] text-[--primary] font-bold">Reach Out To Us</h2>

      <div className="w-full md:w-[60%] flex justify-evenly items-center flex-wrap m-[2em]">
        <div className="hover:shadow-lg md:w-[350px] w-full flex justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out">
          <img src="/email.png" alt="email" className="w-[40px] h-[40px] mx-3" />
          <a href="mailto:support@bluephoenix.com" className=" text-[12px] md:text-[16px]">
            support@bluephoenix.com
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-center w-full md:w-[60%] my-4 mx-4"
        >
          <div className="flex flex-col justify-start items-center w-full my-3 rounded-lg cursor-pointer bg-[--accent] hover:bg-[--hover] transition-all duration-300 ease-in-out">
            <input
              className="text-[12px] md:text-[16px] w-full p-3 rounded-lg bg-[--bgSoft] outline-none border border-[--accent] "
              type="text"
              placeholder="Your Name"
              name="username"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full my-3 ">
            <input
              className="text-[12px] md:text-[16px] w-full p-3 rounded-lg bg-[--bgSoft] outline-none border border-[--accent]"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full my-3 ">
            <textarea
              className="w-full my-10 text-[12px] md:text-[16px] p-3 border rounded-lg bg-[--bgSoft] outline-none border-[--accent]"
              placeholder="Your Message"
              name="message"
              rows={5}
            />
          </div>
          <button type="submit" className="primary_btn">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-[1.5rem] md:text-[2.5rem]">Thank you for getting in touch.</h3>
          <h3 className="text-[1.5rem] md:text-[2.5rem]">
            <span>We'll be with you very soon!</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
