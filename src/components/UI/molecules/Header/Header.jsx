import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconsList from './IconsList'
import iconLogin from '../../../assets/images/login.png'
const Header = ({ name, socials, login }) => {

    const navigate = useNavigate()

    return (
        <header className="px-[50px] max-[360px]:px-[30px] md:px-[100px] lg:px-[165px] bg-gradient-to-b from-white md:h-[150px] left-0 top-0 from-0% to-[#4EE1A0] py-[10px] md:pt-[60px] lg:pt-[30px] flex flex-col lg:flex-row w-full items-center justify-between z-[5]">
            <div className='flex items-center justify-between w-full'>
                {!login ? <p className="text-[24px] lg:text-[32px] tracking-[-0.44px] font-[700] leading-[32px] items-start flex cursor-pointer justify-center" onClick={() => navigate('/')}>←</p> : <div className='flex'><p className="text-[24px] md:text-[32px] tracking-[-0.44px] font-[700] leading-[32px] items-start flex">{name}</p><p className='className="text-[24px] md:text-[32px] ml-[15px] md:ml-[50px] tracking-[-0.44px] font-[700] leading-[32px] items-start flex hover:text-black transition duration-300 hover:ease-in !decoration-[#4EE1A0]' onClick={() => navigate('/about')}>[about]</p></div>}
                
                {socials ? <IconsList
                    socials={socials}
                /> : null}
            </div>
            {login ? <img className='cursor-pointer hidden lg:block' src={iconLogin} onClick={() => navigate('/login')}/> : null}

            
        </header>
    )
}

export default Header