import React from 'react'

const SummaryBody = ({ jowi, jowiMobile }) => {
    return (
        <>
            <div className="w-full lg:mt-[48px] relative z-[3]">
                <img className="m-auto h-[300px] w-[200px] lg:hidden" src="" alt="" srcSet={jowiMobile} />
                <div className="text-[40px] leading-[40px] tracking-[-1.14px] mt-[40px] text-center lg:text-[88px] lg:text-start lg:leading-[88px] lg:mt-[0px] font-[700] lg:tracking-[-1.5px]">
                    <p>Nice to meet you!</p>
                    <p>I'm <span className="decoration-[#4EE1A0] underline underline-offset-[0.6rem]">Joe Märtens</span>.</p>
                </div>

                <p className="mx-auto lg:mx-0 flex text-center mt-[24px] text-[16px] leading-[26px] w-[343px] lg:mt-[43px] lg:w-[445px] font-[500] lg:text-[18px] tracking-[0px] lg:text-start lg:leading-[28px] lg:m-">Full stack developer from Montevideo with a strong passion for elegant web apps and a keen eye to catch the attention of the most perfectionist.</p>

                {/* Desktop */}
                <p className="hidden lg:flex w-[95.7px] hover-underline-animation uppercase mt-[56px] lg:hover:text-[#4EE1A0] transition duration-300 hover:ease-in">contact me</p>
                {/* Mobile */}
                <p className="tracking-[2.29px] leading-[26px] font-[700] lg:hidden w-full text-center mt-[24px] uppercase lg:mt-[56px] lg:hover:text-[#4EE1A0] transition duration-300 lg:hover:ease-in !decoration-[#4EE1A0] underline-offset-[1rem] underline">contact me</p>
            </div>
            <div className="w-full h-[720px] absolute lg:flex justify-end top-0 right-[190px] z-[1] hidden">
                <div className="w-[445px] h-[720px]" style={{ backgroundImage: `url(${jowi})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'contain' }}>

                </div>
            </div>

        </>
    )
}

export default SummaryBody