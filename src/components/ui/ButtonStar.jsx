import React from 'react'
import Link from "next/link";
import StarRing from './StarRing';

const ButtonStar = ({ text = 'Contact Us', href = '#', color = 'black' }) => {
    return (
        <Link href={href} className={`gap-x-5 h-10 w-48 border border-${color} text-${color} rounded-2xl flex justify-center items-center`}>
            <div className='w-7'>
                <StarRing color={`fill-${color}`} />
            </div>
            {text}
        </Link>
    )
}

export default ButtonStar