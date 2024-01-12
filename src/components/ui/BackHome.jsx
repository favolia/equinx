'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { PiHouseFill } from 'react-icons/pi'
import Link from "next/link";

const BackHome = () => {
    const router = useRouter()
    return (
        <div onClick={(e) => {e.preventDefault(); router.replace('/') }} className='w-44 h-11 flex rounded-full gap-x-2 justify-start items-center bg-cream px-2'>
            <div className='bg-coppertone h-8 w-8 flex justify-center items-center text-white rounded-full'>
                <PiHouseFill />
            </div>
            <div className='text-xs flex flex-col justify-start items-start h-8'>
                <p>Back To Home</p>
                <p className='font-light'>EQUINX</p>
            </div>
        </div>
    )
}

export default BackHome