import React from 'react'

const SummaryBody = ({ jowi }) => {
    return (
        <>
            <div className="w-full relative z-[0] md: flex flex-col-reverse lg:flex-row justify-between">
                
                <div className="text-[40px] leading-[40px] tracking-[-1.14px] mt-[20px] text-center lg:mt-[70px] lg:text-[88px] lg:text-start lg:leading-[88px] font-[700] lg:tracking-[-1.5px] relative flex flex-col">
                    <p>Nice to meet you!</p>
                    <p>I'm <span className="decoration-[#4EE1A0] underline underline-offset-[0.6rem]">Joe Märtens</span>.</p>
                    <p className="relative mx-auto lg:mx-0 flex text-center mt-[40px] text-[16px] leading-[26px] lg:mt-[43px] lg:w-[445px] font-[500] lg:text-[18px] tracking-[0px] lg:text-start lg:leading-[28px] lg:m-">Full stack developer from Montevideo with a strong passion for elegant web apps and a keen eye to catch the attention of the most perfectionist.</p>
                    {/* Desktop */}
                    <a href="#contact"><p className="hidden  lg:inline-block font-[700] text-[40px] tracking-[10px]  uppercase mt-[56px] hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in !decoration-[#4EE1A0]">contact me</p></a>
                    {/* Mobile */}
                    <a href="#contact"><p className="mt-[40px] tracking-[2.29px] leading-[26px] font-[700] lg:hidden w-full text-center uppercase lg:hover:text-[#4EE1A0] transition duration-300 lg:hover:ease-in !decoration-[#4EE1A0] underline-offset-[1rem] underline">contact me</p></a>
                </div>

                <div className='lg:flex '>
                    <img className="m-auto w-[250px] md:w-[350px] mt-[30px] lg:hidden" src={jowi} alt="" srcSet="" />
                    <img className="hidden h-[650px] lg:object-contain lg:flex" src={jowi} alt="" srcSet="" />
                </div>                


            </div>

        </>
    )
}

export default SummaryBody
