import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Navbar from '@/components/Navbar';
import { IoArrowRedoSharp } from "react-icons/io5";
import ButtonStar from '@/components/ui/ButtonStar';
import BlurButton from '@/components/ui/BlurButton';
import AkioLabel from '@/components/ui/AkioLabel';
import NavbarMobile from '@/components/NavbarMobile';

const Home = () => {
    return (
        <main className='w-full'>
            <header className='w-full h-screen bg-[url(/assets/images/pexels-koolshooters-6976102.jpg)] bg-cover bg-center pt-4'>
                <div className='px-3 lg:px-4'>
                    <Navbar background='bg-white/5 backdrop-blur-2xl' />
                    <NavbarMobile style={'text-white backdrop-blur-2xl rounded-small py-2 bg-white/5 px-5'} />
                </div>

                <div className='w-full flex flex-col gap-y-10 pl-4 lg:pl-12 mt-8 translate-y-10 lg:translate-y-0'>
                    <div className='w-full h-96 flex flex-col lg:flex-row lg:justify-between lg:items-end pr-4 gap-y-8 lg:gap-y-0'>
                        <div className='flex flex-col gap-y-6 text-white '>
                            <ButtonStar text='Visit Site' color='white' style='border-transparent order-3 lg:order-1 w-fit lg:w-48 lg:border-white' href='https://akio-ds.vercel.app/' />
                            <h1 className='text-3xl lg:text-5xl font-abril_fatface order-1 lg:order-2'>Made For You</h1>
                            <p className="line-clamp-4 w-40 text-pretty text-sm lg:font-light text-white order-2 lg:order-3">
                                Eco-frielndly bottles that are durable and can b c customized
                                according to your taste
                            </p>
                        </div>

                        <div className='h-28 w-[10rem] lg:h-36 lg:w-56 flex justify-end items-center lg:items-end p-2 self-end lg:self-start rounded-small bg-[url(/assets/images/tino-rischawy-7X1zd1uI0HI-unsplash.jpg)] bg-cover bg-center'>
                            <Link href={'#'} className='h-10 w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center'>
                                <IoArrowRedoSharp className='text-xs text-white' />
                            </Link>
                        </div>

                    </div>

                    <div className='w-full flex justify-between'>
                        <div className='hidden lg:flex gap-x-8'>
                            <div>
                                <BlurButton text={'See Catalogue'} href='/catalog' />
                            </div>
                            <div>
                                <BlurButton text={'More'} href='#' />
                            </div>
                        </div>

                        <div>
                            <AkioLabel />
                        </div>

                        <h1 className='hidden lg:block text-4xl -rotate-90 text-white font-abril_fatface'>Akio</h1>
                    </div>
                </div>

            </header>
        </main>
    )
}

export default Home