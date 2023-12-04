import React from 'react'

const Tech = ({ name, time }) => {
    return (
        <div className="min-[834px]:w-1/2 w-full text-center mt-[40px] lg:mt-0 lg:w-[30%] lg:text-start ">
            <p className="font-[700] tracking-[-1.5px] text-[48px] leading-[56px]">{name}</p>
            {time != 1 ? <p>{time} Years Experience</p> : <p>{time} Year Experience</p>}
        </div>
    )
}

export default Tech