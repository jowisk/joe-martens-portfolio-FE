import React from 'react'
import SummaryBody from '../../molecules/SummaryBody/SummaryBody'

const Summary = ({ jowi }) => {
    return (
        <>
            <div className="px-[16px] md:px-[165px] w-full h-[900px] pt-[180px] z-[0] flex-col  relative bg-[#242424]">
                <SummaryBody
                    jowi={jowi}
                />

            </div>

        </>
    )
}

export default Summary