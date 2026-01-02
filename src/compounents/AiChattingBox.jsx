import React from 'react'
import { BsChatDots } from 'react-icons/bs'
import { IoIosClose } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";


const AiChattingBox = ({ openAiChat, setOpenAiChat }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }} className=' absolute right-0 bottom-16 bg-black/10 backdrop-blur-[2px] border border-gray-400 rounded-[14px] text-white w-[300px] h-[400px] px-4 py-2'>
      {/* header */}
      <div className='flex items-center justify-between'>
        {/* icon & title */}
        <div className='flex items-center gap-2'>
          {/* Icon */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
              color: "#000",
              boxShadow: "0 8px 20px rgba(34,211,238,0.25)",
            }}
          >
            <BsChatDots className="text-lg" />
          </div>

          {/* title */}
          <h3 className='text-lg font-semibold'>AI Chatbot</h3>
        </div>

        {/* close button */}
        <button onClick={() => setOpenAiChat(false)} className='text-2xl'>
          <IoIosClose />
        </button>
      </div>

      <hr className='my-2 border-gray-400' />

      {/* body */}
      <div className='space-y-5 py-4 bg-gradient-to-tr  '>
        {/* customer message */}
        <div className='flex  gap-2 justify-end '>
          <p className='border border-blue-300  px-2 py-1 rounded-[10px] rounded-br-none w-fit text-wrap'> Hi, I need help </p>
          <div style={{
            background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
            color: "#000",
            boxShadow: "0 8px 20px rgba(34,211,238,0.25)",
          }} className='bg-gray-200 w-9 h-9 rounded-full shrink-0 flex items-center justify-center'>
            <img src="/user.jpg" alt="" className='w-8 h-8 rounded-full' />
          </div>
        </div>

        {/* agent message */}
        <div className='flex items-center gap-2 justify-start'>
          <div className='bg-gray-200 w-8 h-8 rounded-full shrink-0 flex items-center justify-center' style={{
            background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
            color: "#000",
            boxShadow: "0 8px 20px rgba(34,211,238,0.25)",
          }}>
            <BsChatDots className='text-lg' />
          </div>
          <p className='border border-blue-300  px-2 py-1 rounded-[10px] rounded-bl-none w-fit text-left'>Hi, I am here to help</p>
        </div>

      </div>


      {/* footer */}
      <div className='absolute shrink-0 bottom-0 left-0 right-0 bg-white/20 backdrop-blur-10 flex items-center justify-between px-4 py-1 rounded-b-[14px]'>
        <input type="text" name="" id="" placeholder='Type here...' className='bg-transparent outline-none w-[240px]' />
        <button className='rotate-45 text-xl'>
          <IoIosSend />
        </button>
      </div>


    </motion.div>
  )
}

export default AiChattingBox
