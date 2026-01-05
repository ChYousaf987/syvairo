import React from "react";
import { BsChatDots } from "react-icons/bs";
import { IoIosClose, IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

const AiChattingBox = ({ setOpenAiChat }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute right-0 bottom-16 w-[340px] h-[480px] rounded-2xl bg-black/10 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_40px_rgba(0,206,209,0.25)] text-white px-4 py-3"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(0,206,209,0.6)]">
            <BsChatDots />
          </div>
          <h3 className="font-semibold">AI Chatbot</h3>
        </div>
        <button onClick={() => setOpenAiChat(false)} className="text-2xl">
          <IoIosClose />
        </button>
      </div>

      <hr className="my-3 border-white/10" />

      {/* MESSAGES */}
      <div className="space-y-4 overflow-y-auto h-[380px] pr-2">
        <div className="flex justify-end">
          <p className="bg-cyan-500/20 border border-cyan-400/30 px-3 py-2 rounded-xl rounded-br-none max-w-[75%]">
            Hi, I need help
          </p>
        </div>

        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <BsChatDots />
          </div>
          <p className="bg-white/10 border border-white/20 px-3 py-2 rounded-xl rounded-bl-none max-w-[75%]">
            Hi, I am here to help
          </p>
        </div>
      </div>

      {/* INPUT */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-4 bg-black/40 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
        />
        <button className="text-cyan-400 hover:scale-110 transition">
          <IoIosSend className="text-xl" />
        </button>
      </div>
    </motion.div>
  );
};

export default AiChattingBox;
