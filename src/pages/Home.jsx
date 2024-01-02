import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Navbar from '@/components/Navbar';
import { IoArrowRedoSharp } from "react-icons/io5";
import ButtonStar from '@/components/ui/ButtonStar';
import BlurButton from '@/components/ui/BlurButton';
import AkioLabel from '@/components/ui/AkioLabel';
import NavbarMobile from '@/components/NavbarMobile';
import StarBlink from '@/components/ui/StarBlink';

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

                        <h1 className='hidden lg:block text-4xl -rotate-90 text-white font-abril_fatface translate-x-2'>Akio</h1>
                    </div>
                </div>

            </header>

            <div className='w-full bg-coffe text-white pt-5 pb-10 px-4 lg:px-0'>
                <div className='w-full lg:text-sm flex justify-between items-end lg:px-4'>
                    <h4 className='hidden lg:flex'>GOOD DESIGN</h4>
                    <p className='capitalize lg:lowercase'>solutions</p>
                    <h4 className='font-soligant'>Catalog 02</h4>
                </div>

                <div className='flex flex-col lg:flex-row w-full justify-between mt-14 lg:mt-24'>

                    <div className=''>
                        <div className='lg:px-4'>
                            <div className='w-fit lg:gap-x-72 flex justify-between items-center'>
                                <h1 className='hidden lg:flex text-3xl font-soligant'>Empowering<br />Innovation</h1>
                                <h1 className='lg:hidden text-3xl font-soligant'>Tailored<br />Innovation</h1>
                                <p className='hidden lg:flex text-sm font-soligant'>User-Centric Design</p>
                            </div>
                        </div>

                        <div className='flex mt-5 lg:mt-0'>
                            <div className='w-full h-60 lg:w-[38rem] lg:h-[30rem] bg bg-[url(/assets/images/anton-sukhinov-4GvsTa3Y-5I-unsplash.jpg)] bg-cover bg-center'></div>
                            <h1 className='hidden lg:flex w-44 text-3xl font-soligant ml-7 mt-5'>Infusing Tech with Art</h1>
                        </div>

                    </div>

                    <div className='flex flex-col items-center lg:items-start gap-y-2 mt-10 lg:mt-0'>
                        <p className=' lg:text-sm font-light leading-4 text-center lg:text-start'>Clear<br />Communication</p>
                        <div className='mt-2 w-60 h-96 lg:w-44 lg:h-60 rounded-small lg:rounded-r-none bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center'></div>
                        <ButtonStar text='Visit Site' style='w-40 mt-4 lg:mt-8' color='white' />
                    </div>

                </div>

                <div className='w-full hidden lg:flex justify-between items-center pl-8 pr-4 mt-16'>
                    <h4 className='font-soligant'>Acknowledging the request</h4>
                    <p className='w-52 text-xs text-right'>
                        Experience a collaborative journey,
                        where your vision meets our expertise
                        to create a website that
                        exceeds expectations
                    </p>
                </div>
            </div>

            <div className='w-full flex flex-col justify-between items-center gap-y-16 lg:gap-y-0 lg:h-screen px-2 lg:pl-6 lg:pr-4 py-10 lg:py-6 bg-camel'>

                <div className='w-full flex flex-col gap-y-10 lg:flex-row justify-between items-center'>
                    <div className='flex text-sm gap-x-48'>
                        <p className='hidden lg:flex'>Creativity</p>
                        <p>Beyond Enchoes</p>
                    </div>

                    <div>
                        <AkioLabel style={'bg-cream text-charcoal'} />
                    </div>
                </div>

                <div className='w-full lg:w-[38rem] h-[15rem] lg:h-96 flex gap-x-2 lg:gap-x-5'>
                    <div className='w-full h-full flex flex-col justify-between items-center py-5 bg-cream rounded-small'>
                        <div className='w-full flex gap-x-3 lg:gap-x-5 justify-center items-center'>
                            <StarBlink style={'w-7 lg:w-10 fill-black'} />
                            <h3 className='hidden lg:flex text-xs lg:text-base font-soligant'>Carefully develop</h3>
                            <h3 className='font-soligant text-center lg:hidden'>POST<br />STORIES</h3>
                            <StarBlink style={'w-7 lg:w-10 fill-black'} />
                        </div>

                        <div className='w-28 h-24 lg:w-48 lg:h-40 rounded-[100px] bg-[url(/assets/images/quokkabottles-6gLya_-tnP8-unsplash.png)] bg-cover bg-center'></div>

                        <Link href={'#'} className='w-28 h-6 lg:w-40 lg:h-10 flex justify-center items-center text-xs rounded-[18px] bg-[#CED0B8]'>
                            Visit Site
                        </Link>

                    </div>

                    <div className='w-full h-full flex flex-col justify-between items-center py-5 bg-[#CED0B8] rounded-small'>
                        <div className='w-full flex gap-x-3 lg:gap-x-5 justify-center items-center'>
                            <StarBlink style={'w-7 lg:w-10 fill-black lg:fill-white'} />
                            <h3 className='hidden lg:flex text-xs lg:text-base font-soligant'>Visionary concepts</h3>
                            <h3 className='font-soligant text-center lg:hidden'>POST<br />STORIES</h3>
                            <StarBlink style={'w-7 lg:w-10 fill-black lg:fill-white'} />
                        </div>

                        <div className='w-28 h-24 lg:w-48 lg:h-40 rounded-[100px] bg-[url(/assets/images/andy-vult-zwZpdhoTbU0-unsplash.jpg)] bg-cover bg-center'></div>

                        <Link href={'#'} className='w-28 h-6 lg:w-40 lg:h-10 flex justify-center items-center text-xs rounded-[18px] bg-cream'>
                            Visit Site
                        </Link>

                    </div>

                </div>

                <div className='w-full flex justify-center lg:justify-between items-center'>
                    <h1 className='text-3xl lg:text-4xl font-soligant'>Essence of Ideas</h1>
                    <p className='text-xs w-72 text-en hidden lg:flex'>Shape your website to be effortlessly traversed—an instinctive and enjoyable sojourn</p>
                </div>

            </div>

        </main>
    )
}

export default Home