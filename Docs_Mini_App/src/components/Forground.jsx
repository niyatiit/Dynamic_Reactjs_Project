import React, { useRef } from 'react'
import Card from './Card'


function Forground() {
    const ref = useRef(null)
    const data = [
        {
            desc: "This is the background color of the card that will be displayed ",
            fileSize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "This is the background color of the card that will be displayed ",
            filseSize: "0.9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "This is the background color of the card that will be displayed ",
            fileSize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "gray" },
        }
    ]
    return (
        <>
            <div ref={ref} className='flex-shrink p-5 fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap'>
                {data.map((element, index) => (
                    <Card data={element} reference={ref} />
                ))}
            </div>
        </>
    )
}

export default Forground