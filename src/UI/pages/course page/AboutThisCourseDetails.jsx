

import React from 'react'

export default function AboutThisCourseDetails({ children, backgroundColor, hasMaxHeight = false }) {
    return (
        <div className={`rounded-3 ${backgroundColor ? '' : 'bag-aboutColor'} p-4 my-2`} style={{
            backgroundColor: backgroundColor,
        }} >
            <div className={`${hasMaxHeight ? 'max-line-5' : ''}`}>

                {children}
            </div>
        </div>
    )
}
