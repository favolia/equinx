import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';

const BlurButton = ({ text, href = '#', style }) => {
    return (
        <Link href={href} className='w-fit'>
            <div className={cn('py-3 px-9 w-fit text-sm rounded-full backdrop-blur-2xl bg-white/5 text-white', style)}>
                {text}
            </div>
        </Link>
    )
}

export default BlurButton