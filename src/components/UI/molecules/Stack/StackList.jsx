import React from 'react'
import Tech from './Tech'

const StackList = ({ techStack }) => {
    return (
        <div className="pb-[40px] lg:pb-0 border-b-[1px] border-white lg:border-0 w-full lg:h-[327px] mt-[20px] lg:mt-[72px] flex-col lg:flex-row flex lg:flex-wrap items-center lg:items-start justify-between">
            {techStack.map((tech, index) => (
                <Tech
                    key={index}
                    name={tech.name}
                    time={tech.time}
                />
            ))}
        </div>
    )
}

export default StackList