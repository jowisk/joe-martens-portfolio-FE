import React from 'react'
import eye from '../../assets/images/eye-open.png'
import { motion } from 'framer-motion'
const Eye = ({ onClickTypeHandler, isVisible }) => {
  return (
    <>
        <img onClick={onClickTypeHandler} src={eye} className='h-[30px] w-[30px]'alt="" />
        <motion.div onClick={onClickTypeHandler} className='bg-white w-[40px] h-[3px] rounded-full absolute' initial={{ scale: 1, rotate: 45}} animate={{ scale: !isVisible ? 1 : 0, rotate: 45}} transition={{ease: "linear", duration: 0.15,}}></motion.div>
    </>
  )
}

export default Eye