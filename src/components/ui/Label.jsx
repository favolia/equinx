import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';
import Image from "next/image";

const Label = ({ href = '/akio-detail', images = '/images/quokkabottles-3HWIsBpEZ_M-unsplash.png', title = 'Collection 01', sub = 'Akio Website', style, textVariant = 1, props }) => {
    return (
        <Link {...props} href={href} className='w-fit'>
            <div className={cn('flex justify-start items-center py-2 px-3 w-56 gap-x-5 text-sm rounded-full backdrop-blur-2xl bg-white/5 text-white', style)}>
                {/* <div className={`h-6 w-6 rounded-full bg-[url('/assets${images}')] bg-center bg-cover`}></div> */}
                <div className={`h-6 w-6 rounded-full overflow-hidden flex justify-center items-center`}>
                    <Image src={`/assets${images}`} height={400} width={400} quality={100} priority loading='eager' alt='rounded small image'  />
                </div>
                <div className='text-xs'>
                    {textVariant == 1 ? (
                        <>
                            <p className='font-bold'>{title}</p>
                            <p className='font-light'>{sub}</p>
                        </>
                    ) : textVariant == 2 ? (
                        <>
                            <p className='font-light'>{title}</p>
                            <p className='font-bold'>{sub}</p>
                        </>
                    ) : (
                        <>
                            <p className=''>{title}</p>
                            <p className=''>{sub}</p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default Label