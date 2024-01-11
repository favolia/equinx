'use client';
import { cn } from '@/lib/utils'
import React from 'react'
import Link from "next/link";
import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const Menu = ({ show, toggleShow, className }) => {
    return (
        <div className={cn(`fixed top-0 left-0 bg-[#EBEAEA] w-full h-screen ${show ? '-translate-y-0' : '-translate-y-full'} transition-all duration-700 ease-in-out z-30`, className)}>

            <div className='w-full h-full pt-6 pb-5 flex flex-col justify-between text-charcoal'>

                <div className={`w-full transition-all ease-in-out px-3 mb-12`}>
                    <nav className={`shadow-lg flex justify-between items-center px-5 py-2 rounded-small`}>
                        <Link href='/' className={`text-coffe font-humane text-2xl tracking-wider font-semibold transition duration-300`}>EQUINX</Link>

                        <button onClick={() => toggleShow(!show)} className={`transition duration-300 ${show ? 'text-coffe' : ''}`}>
                            <IoCloseSharp size={25} />
                        </button>
                    </nav>
                </div>

                <div className='flex h-full justify-between pl-6 pr-12'>
                    <ul className={`${show ? 'opacity-100 transition-all !duration-500 !delay-[600ms]' : ''} opacity-0 transition-all duration-500 ease-out font-soligant text-4xl flex flex-col gap-y-11`}>
                        <li>
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/catalog'}>
                                Catalogue
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact-us'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className='flex flex-col justify-center items-end gap-y-48 -translate-y-10'>
                        <div className={`${show ? 'opacity-100 transition-all !duration-500 !delay-500' : ''} opacity-0 transition-all duration-500 ease-out h-24 w-28 rounded-small bg-[url(/assets/images/christine-siracusa-WW4S9msUKko-unsplash.jpg)] bg-cover bg-center relative`}>
                            <h2 className='absolute bottom-0 right-0 text-7xl translate-y-8 translate-x-8 font-soligant'>01</h2>
                        </div>

                        <ul className={`${show ? 'opacity-100 transition-all !duration-1000 !delay-700' : ''} opacity-0 transition-all duration-500 ease-out flex flex-col justify-start gap-y-2`}>
                            <li>
                                <Link href={'/akio-detail'}>Akio</Link>
                            </li>
                            <li>
                                <Link href={'/ceramics-detail'}>Ceramics</Link>
                            </li>
                            <li>
                                <Link href={'/interior-detail'}>Interior</Link>
                            </li>
                            <li>
                                <Link href={'/restaurant-detail'}>Restaurant</Link>
                            </li>
                            <li>
                                <Link href={'/magazine-detail'}>Magazine</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <Link href={'mailto:equinxcreative@gmail.com'} className={`${show ? 'opacity-100 transition-all !duration-500 !delay-[800ms]' : ''} opacity-0 transition-all duration-500 ease-out py-4 px-6 w-fit rounded-full border border-black`}>
                        equinxcreative@gmail.com
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu