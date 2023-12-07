import React from 'react'

const    ResponseRecorded = ({ formVisibility, test }) => {
    return (
        <article className="bg-[#242424] px-[16] lg:px-[165px] items-center justify-center flex flex-col lg:flex-row pt-[-60px] lg:pt-[84px] lg:justify-between border-b-[1px] border-white lg:pb-[70px] lg:[px-0] min-h-[521px]" id="contact">
            <div className="w-1/2">
                <p className="text-[40px] leading-[40px] text-center tracking-[-1.14px] lg:text-start lg:text-[88px] font-[700] lg:tracking-[-2.5px] lg:leading-[88px]">Thank you!</p>
                <p className="text-center mt-[20px] lg:text-start leading-[26px] lg:w-[445px] lg:mt-[36px] lg:text-[18px] lg:leading-[28px] text-[#D9D9D9]">Your response has been recorded, I'll get back to you as soon as possible.</p>
            </div>
        </article>
    )
}

export default ResponseRecorded