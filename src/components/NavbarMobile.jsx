// NavbarMobile.jsx
'use client';
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/useAppStore";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@/components/Menu";

const NavbarMobile = ({ style, withMenu = false, padding = '', whiteWhenScroll = false, paddingWhenScroll = '', logoColor = '' }) => {
    const scroll = useScrollPosition();
    const [show, toggleShow] = useAppStore(state => [state.show, state.toggleShow]);

    const isFixed = scroll > 500;
    const isStatic = scroll < 200;

    return (
        <>
            <div className={cn(`${show ? 'hidden' : ''} lg:hidden ${isFixed ? paddingWhenScroll : ''} ${isFixed ? ' fixed top-2 duration-500' : 'fixed -top-full duration-1000'} ${isStatic ? '!static' : ''} delay-0 w-full transition-all ease-in-out !z-[9999]`, padding)}>
                <nav className={cn(`${show ? 'shadow-lg' : ''} ${whiteWhenScroll && scroll ? 'bg-white/5' : ''} transition duration-300 flex justify-between items-center`, style)}>
                    <Link href='/' className={`${show ? 'text-coffe' : ''} ${logoColor} font-humane text-2xl tracking-wider font-semibold transition duration-300`}>EQUINX</Link>

                    <button onClick={() => toggleShow(!show)} className={`transition duration-300 ${show ? 'text-coffe' : ''}`}>
                        {show ? (
                            <IoCloseSharp size={25} />
                        ) : (
                            <GiHamburgerMenu size={20} />
                        )}
                    </button>
                </nav>
            </div>
            {withMenu ? (
                <Menu toggleShow={toggleShow} show={show} />
            ) : null}
        </>
    );
};

export default NavbarMobile;
