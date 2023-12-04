import { React, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import cross from '../../../assets/images/x-icon.svg'
import { deleteProject } from '../../../../API'
import { storage } from '../../../../API/firebase'
import { ref } from 'firebase/storage'
import { getDocs } from 'firebase/firestore'

const Project = ({ uuid, name, technologies, img, deploy, git, isEditing, preview}) => {


    const [isVisible, setIsVisible] = useState(false) 
    const [isDeployed, setIsDeployed] = useState(deploy.length != 0)
    const [hasRepo, setHasRepo] = useState(git.length != 0)

    const nameRef = useRef()
    const imgRef = ref(storage, `images/${uuid}`)

    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }

    const deleteProjectHandler = () => {
        deleteProject(nameRef.current.innerHTML, imgRef)
    }

    return (
        <div className="mt-[40px] lg:mt-0 flex flex-col md:w-[540px] w-full h-full relative" onMouseEnter={handleVisibility} onMouseLeave={handleVisibility}>
            
            <motion.div animate={{ scaleY: isVisible ? 1 : 0 }} initial={{ scaleY: 0 }} className={`hidden lg:flex justify-between absolute z-[3] ${!isEditing ? 'bottom-[87px]' : 'bottom-[59px]'} bg-[#242424] w-[540px]  uppercase text-[20px] p-[20px] leading-[26px] tracking-[2.29px] font-[700] border-t-[2px] border-[#4EE1A0]`}>
                {isDeployed ? <a href={deploy}><p className="hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in">view project</p></a> : <p className="text-[16px]">Not deployed yet :(</p>}
                {hasRepo ? <a href={git}><p className="hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in">view code</p></a> : <p>Not on Git</p>}
            </motion.div>

            {isEditing ? <img src={cross} className="absolute h-[100px] right-0" onClick={deleteProjectHandler}/> : null}
            {img ? <img className="w-full h-full max-h-[400px] aspect-video object-cover" src={img}/> : preview?.length != 0 ? <img className="w-full h-full max-h-[400px] aspect-video object-cover" src={preview} alt="" srcSet="" /> : <div className="w-full h-full max-h-[400px] aspect-video object-cover border-white border-[1px] flex items-center justify-center"><p className="text-[50px]">PROJECT IMAGE</p></div>}
            
            {(!isEditing && name.length === 0) ? <p className="uppercase mt-[20px] font-[700] text-[24px] leading-[32px]">project name goes here </p> : <p className="uppercase mt-[20px] font-[700] text-[24px] leading-[32px]" ref={nameRef} >{name}</p>}

            <div className="flex mt-[7px] text-[#D9D9D9] w-full flex-wrap whitespace-nowrap">
                {(!isEditing && technologies.length == 0) ? <p className="uppercase mr-[18px] font-500 text-[18px] leading-[28px]">tech stack goes here</p> : technologies.map((tech, index) => (
                    <p key={index} className="uppercase mr-[18px] font-500 text-[18px] leading-[28px]">{tech}</p>
                ))}
            </div>

            <div className="flex lg:hidden uppercase text-[14px] lg:text-[16px] leading-[26px] tracking-[2.29px] font-[700] my-[10px]">
                {isDeployed ? <a href={deploy}><p className="hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in">view project</p></a> : <p>Not deployed yet :(</p>}
                {hasRepo ? <a href={git} className="ml-[32px]"><p className="hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in  w-full">view code</p></a> : <p>Not on Git</p>}
            </div>

        </div>
    )
}

export default Project