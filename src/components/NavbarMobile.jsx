import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react'
import Link from "next/link";

const NavbarMobile = () => {
    return (
        <nav className="flex justify-between items-center lg:hidden">
            <Link href='/' className="font-humane text-2xl tracking-wider font-semibold">EQUINX</Link>

            <button>
                <GiHamburgerMenu size={20} />
            </button>
        </nav>
    )
}

export default NavbarMobile