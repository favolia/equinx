import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';

const Navbar = ({ background, iconColor  }) => {
    return (
        <nav className={cn(`bg-coffe text-white hidden lg:flex justify-between items-center relative py-4 px-10 rounded-[15px]`, background)}>
            <ul className='text-sm z-20 flex gap-x-8'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/catalog'>Catalogue</Link>
                </li>
            </ul>

            <div className='logo-mid absolute left-0 top-0 w-full h-full flex justify-center items-center'>
                <Link href={'/'} className={cn(`font-humane text-2xl tracking-wide font-semibold`, iconColor)}>EQUINX</Link>
            </div>

            <ul className='text-sm z-20 flex gap-x-8'>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact-us'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar