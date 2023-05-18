import React from 'react'
import IconsList from './IconsList'

const Header = ({ name, socials }) => {

    return (
        <header className="absolute px-[165px] bg-gradient-to-b from-white h-[150px] left-0 top-0 from-0% to-[#4EE1A0] pt-[20px] lg:pt-[39px] flex flex-col lg:flex-row w-full items-center justify-between z-[5]">
            <p className="text-[24px] lg:text-[32px] tracking-[-0.44px] font-[700] leading-[32px] items-start flex">{name}</p>

            <IconsList
                socials={socials}
            />
        </header>
    )
}

export default Header