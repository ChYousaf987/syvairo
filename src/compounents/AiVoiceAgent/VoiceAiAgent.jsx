import React, { useState } from "react";
import { BsMic } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import VoiceEffects from "./VoiceEffect";
import Loader from "./Loader";

const VoiceAiAgent = ({ setOpenAiVoice }) => {
  const [openVoice, setOpenVoice] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCall = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenVoice(true);
    }, 2000);
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute right-0 bottom-16 w-[340px] h-[480px] rounded-2xl bg-black/10 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_30px_rgba(0,206,209,0.25)] text-white px-4 py-3"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <BsMic />
          </div>
          <h3 className="font-semibold">Voice AI Agent</h3>
        </div>
        <button onClick={() => setOpenAiVoice(false)} className="text-xl">
          <IoIosClose />
        </button>
      </div>

      <hr className=" border-white/10" />

      {/* BODY */}
      <div className="flex flex-col items-center justify-center h-full">
        {loading ? (
          <>
            <Loader />
            <p className="mt-2">Connecting...</p>
          </>
        ) : !openVoice ? (
          <>
            <img src="/SYVAIRO_logo.png" className="w-32 mb-6" />
            <button
              onClick={toggleCall}
              className="p-4 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(0,206,209,0.6)]"
            >
              <BsMic className="text-xl text-white" />
            </button>
          </>
        ) : (
          <>
            <p>Listening...</p>
            <VoiceEffects />
            <button
              onClick={() => setOpenVoice(false)}
              className="mt-4 p-3 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600"
            >
              <IoIosClose />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default VoiceAiAgent;
