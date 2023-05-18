import React from 'react'
import NavBar from '../../molecules/NavBar/NavBar'
import SummaryBody from '../../molecules/SummaryBody/SummaryBody'
import StackList from '../../molecules/Stack/StackList'
import CurvesNav from '../design/CurvesNav'
const Summary = ({ jowi, techStack }) => {
    return (
        <>
            <div className="w-full h-[850px] pt-[180px] z-[0] flex-col border-b-[1px] border-white relative">

                <SummaryBody
                    jowi={jowi}
                />

            </div>

            <StackList
                techStack={techStack}
            />


        </>
    )
}

export default Summary