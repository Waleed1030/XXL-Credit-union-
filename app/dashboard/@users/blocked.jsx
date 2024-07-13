import React from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi"

const Blocked = () => {
  return (
    <div className="w-full h-[90vh] backdrop-blur-sm top-0 left-0  flex justify-center items-center">
      <div className="bg-[--bg] w-[90%] max-w-[800px] z-20 rounded-2xl shadow-xl py-16 p-5 flex flex-col items-center justify-start">
        <HiX className=" text-[--red] text-[60px] mb-5" />
        <p>Your account is currently suspended for suspicious activity!</p>
        <p>Please contact Support for further instructions</p>
      </div>
    </div>
  );
};

export default Blocked;
