import React from 'react'
import Link from "next/link";

const Navbar = ({ background = 'bg-coffe' }) => {
    return (
        <nav className={`${background} text-white hidden lg:flex justify-between items-center relative py-4 px-10 rounded-[15px]`}>
            <ul className='text-sm z-20 flex gap-x-8'>
                <li>
                    <Link href='#'>Home</Link>
                </li>
                <li>
                    <Link href='#'>Catalogue</Link>
                </li>
            </ul>

            <div className='logo-mid absolute left-0 top-0 w-full h-full flex justify-center items-center'>
                <h3 className='font-humane text-2xl tracking-wide font-semibold'>EQUINX</h3>
            </div>

            <ul className='text-sm z-20 flex gap-x-8'>
                <li>
                    <Link href='#'>About</Link>
                </li>
                <li>
                    <Link href='#'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar