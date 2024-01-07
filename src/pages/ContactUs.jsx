import NavbarMobile from '@/components/NavbarMobile'
import ButtonStar from '@/components/ui/ButtonStar'
import React from 'react'
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Flower from '@/components/ui/Flower';

const ContactUs = () => {
    return (
        <main className='h-screen w-full flex flex-col lg:flex-row text-white'>
            <div className='w-full h-full bg-sky-blue'>
                <div className='block w-full p-4 lg:hidden'>
                    <NavbarMobile />
                </div>

                <div className='w-full hidden lg:flex flex-col pt-6 pl-10 pr-5 gap-y-16'>
                    <div className='w-full flex justify-between items-center'>
                        <Link href={'/'}>Equinx</Link>
                        <ButtonStar text='Back To Home' href='/' color='white' />
                    </div>

                    <div className='w-full flex flex-col items-center justify-center gap-y-16'>

                        <div className='w-full flex justify-between items-center'>
                            <p className='text-xs'>2024 - Contact</p>
                            <p className='text-xs'>Your Trustworthy Partner from Plan to Polish</p>
                        </div>

                        <p className='text-sm'>Impeccable</p>

                        <h1 className='text-8xl font-soligant self-start'>Contact Us</h1>

                    </div>

                </div>

                <div className='w-full -translate-x-5 flex justify-center items-center lg:hidden'>
                    <h1 className='font-soligant flex items-center text-3xl lg:text-8xl gap-x-5 lg:gap-x-32 mt-10 lg:mt-5'>
                        Contact
                        <div className='w-5'>
                            <Flower color='fill-white' />
                        </div>
                        Us
                    </h1>
                </div>

                <div className='w-full flex flex-col lg:flex-row gap-y-5 px-4 lg:pr-0 lg:pl-10 mt-14 lg:mt-20'>
                    <div className='w-full flex flex-col gap-y-5'>
                        <h1 className='font-soligant text-5xl'>Drop Us A Line</h1>
                        <Link href={'#'} className='lg:text-sm'>equinx000@gmail.com</Link>
                    </div>

                    <Link href={'#'} className='self-end lg:self-start translate-y-12 lg:translate-y-0 lg:translate-x-10'>
                        <div className='h-24 w-24 flex justify-center items-center bg-corn-yellow rounded-full'>
                            <IoMdMail className='text-4xl' />
                        </div>
                    </Link>

                </div>

            </div>

            <div className='w-full lg:w-[50rem] h-full bg-[url(/assets/images/chris-galbraith-7XAM0J3dNQM-unsplash.jpg)] bg-cover bg-center'></div>
        </main>
    )
}

export default ContactUs