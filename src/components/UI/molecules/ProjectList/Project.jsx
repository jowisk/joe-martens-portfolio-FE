import { React, useState } from 'react'

const Project = ({ name, technologies, src }) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibility = () => {
        setIsVisible(prevState => {
            return !prevState
        })
    }

    return (
        <div className="mt-[40px] lg:mt-0 flex flex-col w-full h-[398px] lg:w-[540px] lg:h-[487px]">
            <img onMouseEnter={handleVisibility} className="w-full h-full h-[400px]lg:w-[540px]" src={src} alt="" srcSet="" />
            <p className="uppercase mt-[20px] font-[700] text-[24px] leading-[32px]">{name}</p>
            <div className="flex mt-[7px] text-[#D9D9D9] w-full">
                {technologies.map((tech, index) => (
                    <p key={index} className="uppercase mr-[18px] font-500 text-[18px] leading-[28px]">{tech}</p>
                ))}
            </div>
            <div className="flex lg:hidden uppercase text-[16px] leading-[26px] tracking-[2.29px] font-[700] my-[10px]">
                <p className="underline decoration-[#4EE1A0] underline-offset-[15px]">view project</p>
                <p className="ml-[32px] underline decoration-[#4EE1A0] underline-offset-[15px]">view code</p>
            </div>

        </div>
    )
}

export default Project