import React from 'react'
import Tech from './Tech'
const Stack = ({ techStack }) => {
    return (
        <div className="mt-[72px] flex w-full ">
            {techStack.map((tech, index) => (
                <Tech />
            ))}

        </div>
    )
}

export default Stack