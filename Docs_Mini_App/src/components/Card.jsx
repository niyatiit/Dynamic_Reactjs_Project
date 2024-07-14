import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion" ;

function Card({ data , reference}) {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness : 100 , bounceDamping : 30 }} className='w-60 h-72 rounded-[45px] overflow-hidden bg-zinc-900/90 text-white py-10 px-8 relative'>
                <FaFileAlt />
                <p className='text-sm  leading-tight mt-5 font-semibold '>{data.desc}</p>
                <div className='footer absolute bottom-0 left-0 w-full'>
                    <div className='flex items-center justify-between mb-3 py-3 px-8'>
                        <h5> {data.fileSize} </h5>
                        <span className=' w-7 h-7 rounded-full flex justify-center items-center bg-zinc-600'>
                            {data.close ? <IoClose /> : <FaDownload size=".7em" color='#fff' />}

                        </span>
                    </div>
                    {data.tag.isOpen ? (
                        <div className={`flex items-center justify-center tag w-full py-4 bg-green-700`}>
                            <h3 className='text-sm font-semibold '> {data.tag.tagTitle}  </h3>
                        </div>)
                        : null}

                </div>
            </motion.div>
        </>
    )
}

export default Card 