import React from 'react'

const IconsList = ({ socials }) => {
    return (
        <div className="flex w-[100.5px] mt-[20px] h-full justify-between items-start lg:mt-[0px] lg:mr-[29.5px] flex-wrap">
            {socials.map((social, index) => (
                <a key={index} href={social.url}><img className="w-[24px] h-[24px]" src="" alt="" srcSet={social.icon} /></a>
            ))}
        </div>
    )
}

export default IconsList