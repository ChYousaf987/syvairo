import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDots, BsMic } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import AiChattingBox from "./AiChattingBox";
import VoiceAiAgent from "./AiVoiceAgent/VoiceAiAgent";

const FloatingAgents = () => {
  const [open, setOpen] = useState(false);
  const [openAiChat, setOpenAiChat] = useState(false);
  const [openAiVoice, setOpenAiVoice] = useState(false);

  /* 🔒 CLOSE EVERYTHING */
  const closeAll = () => {
    setOpen(false);
    setOpenAiChat(false);
    setOpenAiVoice(false);
  };

  /* 💬 OPEN CHAT (ONLY ONE) */
  const toggleAiChat = () => {
    closeAll();
    setOpenAiChat(true);
  };

  /* 🎙️ OPEN VOICE (ONLY ONE) */
  const toggleAiVoice = () => {
    closeAll();
    setOpenAiVoice(true);
  };

  /* 📂 TOGGLE DROPDOWN (ONLY ONE) */
  const toggleDropdown = () => {
    if (open || openAiChat || openAiVoice) {
      closeAll();
    } else {
      setOpen(true);
    }
  };

  const agents = [
    { name: "AI Chatbot", icon: BsChatDots, fnc: toggleAiChat },
    { name: "Voice AI Agent", icon: BsMic, fnc: toggleAiVoice },
  ];

  return (
    <>
      {/* 🌑 OUTSIDE CLICK OVERLAY */}
      {(open || openAiChat || openAiVoice) && (
        <div onClick={closeAll} className="fixed inset-0 z-40 bg-transparent" />
      )}

      <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end">
        {/* 💬 AI CHAT */}
        {openAiChat && (
          <AiChattingBox
            openAiChat={openAiChat}
            setOpenAiChat={setOpenAiChat}
          />
        )}

        {/* 🎙️ VOICE AI */}
        {openAiVoice && <VoiceAiAgent setOpenAiVoice={setOpenAiVoice} />}

        {/* 📂 DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mb-4 w-64 rounded-2xl overflow-hidden backdrop-blur-[10px] text-white shadow-lg"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              {agents.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={i}
                    onClick={agent.fnc}
                    whileHover={{
                      x: 6,
                      scale: 1.03,
                      boxShadow: "0 10px 30px rgba(0,206,209,0.25)",
                    }}
                    className="flex items-center gap-4 px-5 py-4 cursor-pointer"
                    style={{
                      borderBottom:
                        i !== agents.length - 1
                          ? "1px solid var(--card-border)"
                          : "none",
                    }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_15px_rgba(0,206,209,0.5)]">
                      <Icon className="text-white text-lg" />
                    </div>

                    <div>
                      <p className="font-semibold">{agent.name}</p>
                      <p className="text-sm text-gray-400">
                        Start conversation
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🤖 FLOATING BUTTON */}
        <motion.button
          onClick={toggleDropdown}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          animate={open ? {} : { scale: [1, 1.05, 1] }}
          transition={{
            repeat: open ? 0 : Infinity,
            repeatDelay: 2,
            duration: 1.5,
          }}
          className="p-3 rounded-full bg-cyan-600 border-2 border-cyan-500 text-white"
          style={{
            boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
          }}
        >
          <RiAiGenerate className="text-2xl" />
        </motion.button>
      </div>
    </>
  );
};

export default FloatingAgents;
