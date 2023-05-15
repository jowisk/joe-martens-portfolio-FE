import React from 'react'
import NavBar from '../../molecules/NavBar/NavBar'
import SummaryBody from '../../molecules/SummaryBody/SummaryBody'
import StackList from '../../molecules/Stack/StackList'
const Summary = ({ socials, jowi, jowiMobile, techStack }) => {
    return (
        <>
            <div className="w-full h-[850px] lg:h-[824px] z-[2] flex-col border-b-[1px] border-white">
                <NavBar
                    name="jowisk"
                    socials={socials}
                />

                <SummaryBody
                    jowi={jowi}
                    jowiMobile={jowiMobile}
                />

            </div>

            <StackList
                techStack={techStack}
            />
        </>
    )
}

export default Summary