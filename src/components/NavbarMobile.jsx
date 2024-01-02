import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react'
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarMobile = ({ style }) => {
    return (
        <nav className={cn("flex justify-between items-center lg:hidden", style)}>
            <Link href='/' className="font-humane text-2xl tracking-wider font-semibold">EQUINX</Link>

            <button>
                <GiHamburgerMenu size={20} />
            </button>
        </nav>
    )
}

export default NavbarMobile