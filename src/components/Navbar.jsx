'use client'
import React from 'react'
import Link from "next/link";
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollPosition';
// import { useAppStore } from '@/stores/useAppStore';
import Menu from './Menu';

const Navbar = ({ background, withMenu = false, iconColor, padding, paddingWhenStatic }) => {
    const scroll = useScrollPosition();
    // const [show, toggleShow] = useAppStore(state => [state.show, state.toggleShow, state.condition, state.changeCondition]);

    const isFixed = scroll > 500;
    const isStatic = scroll < 200;

    return (
        <>
            <div className={cn(`hidden w-full lg:block ${isStatic ? paddingWhenStatic : ''} ${isFixed ? 'fixed top-4 duration-500' : 'fixed -top-full duration-1000'} ${isStatic ? 'static' : ''} delay-0 w-full transition-all ease-in-out z-50`, padding)}>
                <nav className={cn(`bg-coffe text-white hidden lg:flex justify-between items-center relative py-4 xl:py-5 px-10 rounded-[15px]`, background)}>
                    <ul className='text-sm z-20 flex gap-x-8'>
                        <li>
                            <Link href='/catalog'>Catalogue</Link>
                        </li>
                        <li>
                            <Link href='/showcase'>Showcase</Link>
                        </li>
                    </ul>

                    <div className='logo-mid absolute left-0 top-0 w-full h-full flex justify-center items-center'>
                        <Link href={'/'} className={cn(`font-humane text-[1.7rem] tracking-wide font-semibold`, iconColor)}>EQUINX</Link>
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
            </div>
            {/* {withMenu ? (
                <Menu show={show} />
            ) : null} */}
        </>
    )
}

export default Navbar