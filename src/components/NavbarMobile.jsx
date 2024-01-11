'use client';
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/useAppStore";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@/components/Menu";

const NavbarMobile = ({ style, withMenu = false, padding = '' }) => {
    const scroll = useScrollPosition();
    const [show, toggleShow] = useAppStore(state => [state.show, state.toggleShow]);

    return (
        <>
            <div className={cn(`lg:hidden ${scroll > 500 ? 'fixed top-4 duration-500' : 'fixed -top-full duration-1000'} ${scroll < 200 ? '!static' : ''} delay-0 w-full transition-all ease-in-out z-50`, padding)}>
                <nav className={cn(`${show ? 'shadow-lg' : ''} transition duration-300 flex justify-between items-center`, style)}>
                    <Link href='/' className={`${show ? 'text-coffe' : ''} font-humane text-2xl tracking-wider font-semibold transition duration-300`}>EQUINX</Link>

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
                <Menu className={'lg:hidden'} show={show} />
            ) : null}
        </>
    );
};

export default NavbarMobile;
