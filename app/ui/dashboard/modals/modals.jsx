import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import  Link  from "next/link";
import { FaCheckCircle } from "react-icons/fa";



export const SuccessModal = () => {
    return (
      <div className="w-full h-full absolute bg-[#dfe7ff5f] backdrop-blur-sm top-0 left-0  flex justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, ease: "linear" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="bg-[--bg] w-[90%] max-w-[600px] z-20 rounded-2xl shadow-xl p-5 flex flex-col items-center justify-start"
        >
          <FaCheckCircle className=" text-[--green] text-[60px] mb-5" />
          <p>Your transfer was created successfully.</p>
          <p>Expect it to be delivered in 2 - 3days</p>
          <Link href="/dashboard">
            <button className="primary_btn mt-10">Go Back</button>
          </Link>
        </motion.div>
      </div>
    );
};


export const FailedModal = () => {
  return (
    <div className="w-full h-full absolute bg-[#dfe7ff5f] backdrop-blur-sm top-0 left-0  flex justify-center items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3, ease: "linear" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="bg-[--bg] w-[90%] max-w-[600px] z-20 rounded-2xl shadow-xl p-5 flex flex-col items-center justify-start"
      >
        <HiX className=" text-[--red] text-[60px] mb-5" />
        <p>Your transfer was unsuccessful.</p>
        <p>Try again later.</p>
        <Link href="/dashboard">
          <button className="primary_btn mt-10">Go Back</button>
        </Link>
      </motion.div>
    </div>
  );
};



export const PinModal = ({ state }) => {
    return (
      <div className="w-full h-full absolute bg-[#dfe7ff5f] backdrop-blur-sm top-0 left-0  flex justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, ease: "linear" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="bg-[--bg] w-[90%] max-w-[600px] z-20 rounded-2xl shadow-xl p-5 flex flex-col items-center justify-start text-center "
        >
          <p className=" text-[--accent] text-[20px] font-bold mb-5">
            TRANSFER VERIFICATION
          </p>
          <p className="text-[12px] md:text-[14px]">
            Please enter your{" "}
            <b className="uppercase font-bold text-[--accent]">{wmethod}</b> code
            below to facilitate the transfer of your funds.
          </p>
          <input
            className="p-1 w-[300px] bg-[--bgSoft] rounded-lg border border-[--accent] text-center outline-none mt-3"
            type="text"
            name="pin"
          />
          {state && <div className="text-red-400 text-[12px] mt-2">{state}</div>}
  
          <div className="flex justify-center items-center gap-3 mt-10 w-full">
            <button className="primary_btn">Continue</button>
            <Link href="/dashboard">
              <div className="secondary_btn">Cancel</div>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  };




  export const COTModal = ({ state }) => {
    return (
      <div className="w-full h-full absolute bg-[#dfe7ff5f] backdrop-blur-sm top-0 left-0  flex justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, ease: "linear" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="bg-[--bg] w-[90%] max-w-[600px] z-20 rounded-2xl shadow-xl p-5 flex flex-col items-center justify-start text-center "
        >
          <p className=" text-[--accent] text-[20px] font-bold mb-5">
            TRANSFER VERIFICATION
          </p>
          <p className="text-[12px] md:text-[14px]">
            Please enter your{" "}
            <b className="uppercase font-bold text-[--accent]">cot</b> code
            below to facilitate the transfer of your funds.
          </p>
          <input
            className="p-1 w-[300px] bg-[--bgSoft] rounded-lg border border-[--accent] text-center outline-none mt-3"
            type="text"
            name="cot"
          />
          {state && <div className="text-red-400 text-[12px] mt-2">{state}</div>}
  
          <div className="flex justify-center items-center gap-3 mt-10 w-full">
            <button className="primary_btn">Continue</button>
            <Link href="/dashboard">
              <div className="secondary_btn">Cancel</div>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  };

  


export const BothModal = ({ state }) => {
    return (
      <div className="w-full h-full absolute bg-[#dfe7ff5f] backdrop-blur-sm top-0 left-0  flex justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, ease: "linear" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="bg-[--bg] w-[90%] max-w-[600px] z-20 rounded-2xl shadow-xl p-5 flex flex-col items-center justify-start text-center "
        >
          <p className=" text-[--accent] text-[20px] font-bold mb-5">
            TRANSFER VERIFICATION
          </p>
          <p className="text-[12px] md:text-[14px]">
            Please enter your 
            <b className="uppercase font-bold text-[--accent]">PIN & COT</b> code
            below to facilitate the transfer of your funds.
          </p>
          <input
            className="p-1 w-[300px] bg-[--bgSoft] rounded-lg border border-[--accent] text-center outline-none mt-3"
            type="text"
            name="pin"
          />
  
          <input
            className="p-1 w-[300px] bg-[--bgSoft] rounded-lg border border-[--accent] text-center outline-none mt-3"
            type="text"
            name="cot"
          />
  
  
          {state && <div className="text-red-400 text-[12px] mt-2">{state}</div>}
  
          <div className="flex justify-center items-center gap-3 mt-10 w-full">
            <button className="primary_btn">Continue</button>
            <Link href="/dashboard">
              <div className="secondary_btn">Cancel</div>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  };