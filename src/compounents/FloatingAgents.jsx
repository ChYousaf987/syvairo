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

  // ai chat toggle 
  const toggleAiChat = () => {
    setOpenAiChat(!openAiChat);
    setOpen(false);
  };

  // ai voice toggle 
  const toggleAiVoice = () => {
    setOpenAiVoice(!openAiVoice);
    setOpen(false);
  };

  const agents = [
    {
      name: "AI Chatbot",
      icon: BsChatDots,
      fnc: toggleAiChat
    },
    {
      name: "WhatsApp AI",
      icon: FaWhatsapp,
    },
    {
      name: "Voice AI Agent",
      icon: BsMic,
      fnc: toggleAiVoice
    },
  ];

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end ">

 {/* AI Chatting Box */}
      <div>
        {openAiChat && <AiChattingBox openAiChat={openAiChat} setOpenAiChat={setOpenAiChat} />}
      </div>


      {/* AI Voice Agent */}
      <div>
        {openAiVoice && <VoiceAiAgent setOpenAiVoice={setOpenAiVoice}/>}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="mb-4 w-64 rounded-2xl overflow-hidden shadow-lg"
            // style={{
            //   backgroundColor: "var(--card-bg)",
            //   border: "1px solid var(--card-border)",
            // }}
          >
            {agents.map((agent, i) => {
              const Icon = agent.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 6,
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,206,209,0.25)",
                  }}
                  className="flex items-center gap-4 bg-gradient-to-tr from-[#092242] to-[#3B82F6] rounded- px-5 py-4 cursor-pointer transition-all duration-300 backdrop-blur-[10px]"
                  style={{
                    // backgroundColor: "var(--card-bg)",
                    borderBottom:
                      i !== agents.length - 1
                        ? "1px solid var(--card-border)"
                        : "none",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
                      color: "#000",
                      boxShadow: "0 8px 20px rgba(34,211,238,0.25)",
                    }}
                  >
                    <Icon className="text-lg" />
                  </div>

                  {/* Text */}
                  <div onClick={agent.fnc} className="flex flex-col">
                    <p
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {agent.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Start conversation
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        animate={open ? {} : { scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{
          repeat: open ? 0 : Infinity,
          repeatDelay: 2,
          duration: 1.5,
        }}
        aria-label="AI Agents"
        className="p-3 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
        style={{
          boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1", // neon glow
        }}
      >
        <RiAiGenerate className="text-2xl text-white" />
      </motion.button>

     
    </div>
  );
};

export default FloatingAgents;
