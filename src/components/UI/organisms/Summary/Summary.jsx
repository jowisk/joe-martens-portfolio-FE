import React from 'react'
import SummaryBody from '../../molecules/SummaryBody/SummaryBody'

const Summary = ({ jowi }) => {
    return (
        <>
            <article className="px-[16px] md:px-[165px] w-full max-[352px]:h-[800px] h-[700px] md:h-[820px] lg:h-[1000px] lg:pt-[150px] z-[0] flex-col relative bg-[#242424] xl:h-[1000px] 2xl:h-[900px]">
                <SummaryBody
                    jowi={jowi}
                />

            </article>

        </>
    )
}

export default Summary