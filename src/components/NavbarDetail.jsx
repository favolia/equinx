import React from 'react'
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";


const NavbarDetail = () => {
    return (
        <nav className={`text-white hidden lg:flex justify-between items-center py-2 px-5 relative rounded-[15px]`}>
            <div className='flex justify-center items-center'>
                <h3 className='text-sm'>Equinx</h3>
            </div>

            <ul className='absolute w-full h-full left-0 top-0 text-sm z-20 flex justify-center items-center gap-x-8'>
                <li>
                    <Link href='#'>Catalogue</Link>
                </li>
                <li>
                    <Link href='#'>About Us</Link>
                </li>
                <li>
                    <Link href='#'>Contact</Link>
                </li>
            </ul>

            <button>
                <GiHamburgerMenu size={20} />
            </button>
        </nav>
    )
}

export default NavbarDetail