import React from 'react'
import IconsList from './IconsList'

const NavBar = ({ name, socials }) => {

    return (
        <div className="bg-gradient-to-b from-[#151515] h-[150px] from-40% to-transparent lg:sticky top-0 pt-[20px] lg:pt-[39px] flex flex-col lg:flex-row w-full items-center justify-between z-[10]">
            <p className="text-[24px] lg:text-[32px] tracking-[-0.44px] font-[700] leading-[32px] items-start flex">{name}</p>

            <IconsList
                socials={socials}
            />
        </div>
    )
}

export default NavBar