import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconsList from './IconsList'
import iconLogin from '../../../assets/images/login.png'
const Header = ({ name, socials, login }) => {

    const navigate = useNavigate()

    return (
        <header className="absolute px-[165px] bg-gradient-to-b from-white h-[150px] left-0 top-0 from-0% to-[#4EE1A0] pt-[20px] lg:pt-[39px] flex flex-col lg:flex-row w-full items-center justify-between z-[5]">
            <div className='flex items-center justify-between w-full'>
                <p className="text-[24px] lg:text-[32px] tracking-[-0.44px] font-[700] leading-[32px] items-start flex">{name}</p>
                
                {socials ? <IconsList
                    socials={socials}
                /> : null}
            </div>

            {login ? <img src={iconLogin} onClick={() => navigate('/login')}/> : null}
            
        </header>
    )
}

export default Header