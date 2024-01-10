import NavbarMobile from '@/components/NavbarMobile'
import ButtonStar from '@/components/ui/ButtonStar'
import React from 'react'
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Flower from '@/components/ui/Flower';

const ContactUs = () => {
    return (
        <main className='min-h-screen lg:h-screen w-full flex flex-col lg:flex-row text-white'>
            <div className='w-full h-full bg-sky-blue pb-28 lg:pb-3'>
                <div className='block w-full p-4 lg:hidden'>
                    <NavbarMobile />
                </div>

                <div className='w-full hidden lg:flex flex-col pt-6 pl-12 pr-5'>
                    <div className='w-full flex justify-between items-center'>
                        <Link href={'/'}>Equinx</Link>
                        <ButtonStar text='Back To Home' href='/' color='white' />
                    </div>
                </div>

                <div className='mt-5 px-4 lg:px-0 lg:mt-10'>
                    <div className='w-full flex justify-between items-center lg:pl-12 lg:pr-5'>
                        <p className='text-xs lg:text-base font-light'>2024</p>
                        <p className='hidden lg:block lg:text-sm xl:text-base font-light'>Your Trustworthy Partner from Plan to Polish</p>
                    </div>

                    <div className='my-11 w-full flex justify-center items-center lg:my-12 xl:my-14'>
                        <Link href={'/contact-us'} className='text-4xl lg:text-3xl xl:text-4xl pb-1 border-b border-white text-white font-soligant px-1'>
                            Contact Us
                        </Link>
                    </div>

                    <div className='lg:px-10 flex flex-col justify-center items-start gap-y-10'>
                        <h2 className='w-56 font-light lg:font-normal lg:text-3xl xl:text-4xl lg:w-96'>
                            Lets shape your online journey collaboratively.
                        </h2>

                        <p className='text-sm lg:text-xl xl:text-2xl font-light'>Drop Us A Line</p>
                    </div>

                    <div className='lg:px-10 mt-10'>
                        <Link href={'mailto:Equinx000@gmail.com'}>
                            <h1 className='text-2xl lg:text-5xl xl:text-6xl font-light pb-2 lg:pb-5 border-b border-b-white w-fit'>
                                Equinx000@gmail.com
                            </h1>
                        </Link>
                    </div>

                    <div className='hidden lg:block lg:mt-8 xl:mt-10'>
                        <ButtonStar text='All Rights Reserved' color='white' starSize={'w-12'} style='border-none pl-10 w-fit' />
                    </div>
                </div>

            </div>

            <div className='w-full flex justify-center items-end pb-6 lg:w-[50rem] h-80 lg:h-full bg-[url(/assets/images/chris-galbraith-7XAM0J3dNQM-unsplash.jpg)] bg-cover bg-center relative'>
                <div className='absolute top-0 right-10 lg:top-auto lg:bottom-20 lg:left-0 -translate-y-10 lg:translate-y-0 lg:-translate-x-10'>
                    <Link href={'#'} className=''>
                        <div className='h-20 w-20 flex justify-center items-center bg-[#E7D8AE] text-[#5D95A3] rounded-full'>
                            <IoMdMail className='text-3xl' />
                        </div>
                    </Link>
                </div>

                <div className='lg:hidden'>
                    <ButtonStar href='#' text='All Rights Reserved' color='black' starSize={'w-12'} style='w-fit text-charcoal !border-transparent' />
                </div>
            </div>
        </main>
    )
}

export default ContactUs