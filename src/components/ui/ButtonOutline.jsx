import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';

const ButtonOutline = ({ color = 'white', text = 'Visit Site', style, href = '#' }) => {
    return (
        <Link href={href} className={cn(`gap-x-5 h-10 w-48 border border-${color} text-${color} rounded-2xl flex justify-center items-center`, style)}>
            {text}
        </Link>
    )
}

export default ButtonOutline