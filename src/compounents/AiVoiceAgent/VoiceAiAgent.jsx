import React, { useState } from 'react'
import VoiceEffects from './VoiceEffect'
import { IoIosClose } from 'react-icons/io'
import {  BsMic } from 'react-icons/bs'
import Loader from './Loader'
import { motion } from 'framer-motion'


const VoiceAiAgent = ({ setOpenAiVoice }) => {
  const [openVoice, setOpenVoice] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleCall = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpenVoice(true)
    }, 2000);

  }


  return (
    <motion.div initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }} className='absolute right-0 bottom-16 bg-black/20 text-white border border-gray-400 backdrop-blur-[2px] w-[300px] h-[400px] space-y-6 rounded-[14px] px-4 py-2'>
      {/* header */}
      <div className=''>
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
              <BsMic className="text-lg" />
            </div>

            {/* title */}
            <h3 className='text-lg font-semibold'>Voice Ai Agent</h3>
          </div>

          {/* close button */}
          <button onClick={() => setOpenAiVoice(false)} className='text-2xl'>
            <IoIosClose />
          </button>
        </div>

        <hr className='my-2 border-gray-400 ' />
      </div>


      {/* body */}
      <div className=' flex flex-col items-center justify-center'>

        {loading ? (<> <div className='text-center -space-y-6'><Loader /> <p>Connecting...</p></div> </>) :

          <> {!openVoice ? <div className='flex flex-col items-center py-14 space-y-10'>
            {/* logo */}
            <div>
              <img className='w-40' src="/SYVAIRO_logo.png" alt="" />
            </div>

            {/* buttons */}
            <div className='flex items-center gap-4 '>
              <img className='w-10 cursor-pointer hover:scale-110 transition-all duration-300' src="/microphone.png" alt="" />
              <img onClick={toggleCall} className='w-10 cursor-pointer hover:scale-110 transition-all duration-300' src="/sound.png" alt="" />
            </div>
          </div>
            :
            <div className='space-y-4 text-center'>
              <p className='text-center'>Listening...</p>

              <VoiceEffects />
              <p className='text-center'>Connected</p>

              {/* connection end button */}
              <button onClick={() => setOpenVoice(false)} className='text-3xl rounded-full hover:scale-110 transition-all duration-300' style={{
                background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
                color: "#000",
                boxShadow: "0 8px 20px rgba(34,211,238,0.25)",
              }}>
                <IoIosClose />
              </button>
            </div>}
          </>}


      </div>
    </motion.div>
  )
}

export default VoiceAiAgent
