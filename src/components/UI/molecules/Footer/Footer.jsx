import React from 'react'
import IconsList from '../NavBar/IconsList'

const Footer = ({ name, socials }) => {
    return (
        <div className="pt-[39px] lg:pt-[47px] pb-[60px] lg:pb-[92px] flex flex-col items-center lg:flex-row w-full justify-between z-[2]">
            <p className="text-[24px] leading-[32px] tracking-[-0.33px] lg:text-[32px] lg:tracking-[-0.44px] font-[700] lg:leading-[32px] items-start flex">{name}</p>

            <IconsList
                socials={socials}
            />
        </div>
    )
}

export default Footer