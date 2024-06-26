import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <>
    {console.log('Hello World')}
    <motion.div
    // style={{   width: "150px",
    //   height: "150px",
    //   backgroundImage: "url('https://framerusercontent.com/images/M4SNURkNYCDjIiopKdiL689jOQ.svg')",
    //   borderRadius: "30px" }}
    className ="h-[150px] w-[150px] bg-[#f00] rounded-[30px] bg-gradient-to-r from-[#f00] to-[#00f] text-[#fff] font-bold text-center flex items-center justify-center" 
    initial={{ backgroundSize: "100%" }}
    animate={{ backgroundSize: "200%" }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 40,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0.2,
    }}
  >
    Animation
  </motion.div>
  </>
  )
}
