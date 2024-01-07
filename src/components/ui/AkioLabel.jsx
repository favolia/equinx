import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';

const AkioLabel = ({ href = '/akio-detail', style }) => {
    return (
        <Link href={href} className='w-fit'>
            <div className={cn('flex justify-start items-center py-2 px-3 w-56 gap-x-5 text-sm rounded-full backdrop-blur-2xl bg-white/5 text-white', style)}>
                <div className='h-6 w-6 rounded-full bg-[url(/assets/images/quokkabottles-3HWIsBpEZ_M-unsplash.png)] bg-center bg-cover'></div>
                <div className='text-xs'>
                    <p className='font-bold'>Collection 01</p>
                    <p className='font-light'>Akio Website</p>
                </div>
            </div>
        </Link>
    )
}

export default AkioLabel