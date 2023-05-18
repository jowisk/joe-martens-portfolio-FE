import React from 'react'
import Tech from './Tech'

const StackList = ({ techStack }) => {
    return (
        <article className="relative px-[16px] md:px-[165px] lg:pb-0  w-full lg:h-[327px] mt-[20px] lg:mt-[100px] flex-col lg:flex-row flex lg:flex-wrap items-center lg:items-start justify-between">
            {techStack.map((tech, index) => (
                <Tech
                    key={index}
                    name={tech.name}
                    time={tech.time}
                />
            ))}
            <span className="border-b-[1px] bottom-0 my-[50px] border-white relative px-[16px] lg:px-[165px] w-full"></span>
        </article>
    )
}

export default StackList