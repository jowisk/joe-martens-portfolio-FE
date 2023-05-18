import { React, useState } from 'react'
import { motion, transform } from 'framer-motion'

const Project = ({ name, technologies, src, deploy, git }) => {

    const [isVisible, setIsVisible] = useState(false)
    const [isDeployed, setIsDeployed] = useState(deploy.length != 0)


    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="mt-[40px] lg:mt-0 flex flex-col w-full h-[398px] lg:w-[540px] lg:h-[487px] relative" onMouseEnter={handleVisibility} onMouseLeave={handleVisibility}>

            <motion.div animate={{ scaleX: isVisible ? 1 : 0 }} initial={{ scaleX: 0, rotate: 90 }} className="hidden lg:flex justify-between absolute z-[3] right-[307px] top-[167px] bg-[#242424] w-[400px] rotate-90 uppercase text-[20px] p-[20px] leading-[26px] tracking-[2.29px] font-[700]">
                {isDeployed ? <a href={deploy}><p className="hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in">view project</p></a> : <p className="text-[16px]">Not deployed yet :(</p>}
                <a href={git}><p className="hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in">view code</p></a>
            </motion.div>

            <img className="w-full h-full lg:w-[540px]" src={src} alt="" srcSet="" />
            <p className="uppercase mt-[20px] font-[700] text-[24px] leading-[32px]">{name}</p>
            <div className="flex mt-[7px] text-[#D9D9D9] w-full">
                {technologies.map((tech, index) => (
                    <p key={index} className="uppercase mr-[18px] font-500 text-[18px] leading-[28px]">{tech}</p>
                ))}
            </div>
            <div className="flex lg:hidden uppercase text-[16px] leading-[26px] tracking-[2.29px] font-[700] my-[10px]">
                <a href={deploy}><p className="underline decoration-[#4EE1A0] underline-offset-[15px]">view project</p></a>
                <a href={git} className="ml-[32px]"><p className="underline decoration-[#4EE1A0] underline-offset-[15px]">view code</p></a>
            </div>

        </div>
    )
}

export default Project