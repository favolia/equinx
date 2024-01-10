import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Link from "next/link";
import StarRing from '@/components/ui/StarRing';
import ButtonStar from '@/components/ui/ButtonStar';
import { IoMdMail } from 'react-icons/io';

const About = () => {
    return (
        <main className='bg-ocean-mist min-h-screen lg:h-screen lg:max-h-screen lg:min-h-max flex flex-col w-full pt-4 pb-4 lg:pb-0 overflow-x-hidden lg:overflow-hidden'>
            <div className='w-full px-4 mb-8 xl:mb-10'>
                <Navbar background='bg-taupe-blue' />
                <NavbarMobile />
            </div>

            <div className='w-full flex justify-between items-center px-4 lg:pr-12 text-charcoal relative'>
                <h1 className='font-soligant text-xl leading-tight hidden lg:flex'>Resonance of<br />Progress</h1>
                <h1 className='font-soligant text-lg leading-tight flex lg:hidden'>ABOUT US</h1>
                <div className='lg:absolute left-0 top-0 flex lg:w-full lg:h-full justify-center items-center'>
                    <div className='relative'>
                        <h1 className='font-soligant text-xl leading-tight hidden lg:flex'>About Us</h1>
                        <p className='absolute left-0 top-0 text-xs w-[23rem] translate-x-36 hidden lg:block'>A small studio based in Surabaya, Indonesia. We explore deep into client's needs, following established processes. Achieving strategy goals is our forte through a creative process. Collaborating with our partners, we plan the strategy for the future product leader, bringing together design, technology, and brilliant ideas.</p>
                    </div>
                </div>
                <p className='text-sm font-soligant lg:font-satoshi'>2024</p>
            </div>

            <div className='w-full px-4 font-soligant leading-5 lg:hidden mt-16 lg:mt-12 mb-2'>
                <p>Conceptualization To<br />Completion</p>
            </div>

            <div className='w-full h-full flex lg:gap-y-0 px-3 lg:px-0 flex-col lg:mt-10'>
                <div className='flex items-end gap-x-10'>
                    <div className='h-36 w-44 lg:h-28 lg:w-36 rounded-small lg:rounded-l-none bg-cover bg-center bg-[url(/assets/images/christine-siracusa-WW4S9msUKko-unsplash.jpg)] relative'>
                        <h3 className='absolute translate-y-9 translate-x-[10.2rem] bottom-0 right-0 text-[2.5rem] leading-[1.1] lg:hidden font-soligant'>Lets Connect</h3>
                    </div>
                    <div className='hidden lg:flex flex-col'>
                        <h3 className='text-5xl font-soligant lg:translate-y-2'>
                            Our Services
                        </h3>
                    </div>
                </div>

                <div className='lg:hidden px-2 flex flex-col items-center gap-y-7 mb-7 mt-20'>
                    <p className='text-xs text-center'>
                        A small studio based in Surabaya, Indonesia . We explore deep into clients' needs, following established processes. Achieving strategy goals is our forte through a creative process. Collaborating with our partners, we plan the strategy for the future product leader, bringing together design, technology, and brilliant ideas.
                    </p>
                    <Link href={'/contact-us'} className='pb-1 border-b border-black'>
                        Contact Us
                    </Link>
                </div>

                <div className='flex flex-col-reverse lg:flex-row xl:gap-x-20 w-full h-full'>
                    <div className='w-full lg:min-w-[40rem] flex flex-col justify-between items-center relative lg:pt-8'>
                        <h1 className='text-3xl font-soligant lg:hidden my-14'>
                            Our Services
                        </h1>

                        <div className='lg:translate-x-14 flex gap-y-3 flex-col text-xs text-center lg:text-sm lg:scale-95 xl:scale-100 xl:translate-y-5 xl:text-base xl:translate-x-24 w-fit'>
                            <ul className='flex gap-x-2 text-charcoal [&>li]:px-2 lg:[&>li]:px-4 [&>li]:py-2 [&>li]:rounded-xl lg:[&>li]:rounded-2xl [&>li]:border [&>li]:border-black'>
                                <li>Ecommerce</li>
                                <li>Landing Pages</li>
                                <li>Content Management</li>
                            </ul>
                            <ul className='flex gap-x-2 text-charcoal [&>li]:px-2 lg:[&>li]:px-4 [&>li]:py-2 [&>li]:rounded-xl lg:[&>li]:rounded-2xl [&>li]:border [&>li]:border-black'>
                                <li>Seo Optimization</li>
                                <li>Brand Integration</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <ul className='flex gap-x-2 text-charcoal [&>li]:px-2 lg:[&>li]:px-4 [&>li]:py-2 [&>li]:rounded-xl lg:[&>li]:rounded-2xl [&>li]:border [&>li]:border-black'>
                                <li>Backend Development</li>
                                <li>Frontend Development</li>
                            </ul>
                        </div>

                        <p className='lg:hidden mt-16 mb-14 text-xs'>Let's shape your online journey collaboratively.</p>

                        <div className='lg:w-full lg:h-full pb-5 lg:absolute bottom-0 left-0 flex justify-center items-end'>
                            <p className='text-center hidden lg:flex text-sm lg:w-96'>
                                Continuous Learning, Adapting to Latest Technologies.
                            </p>
                            <div className='lg:hidden'>
                                <ButtonStar />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-end gap-y-3 lg:pt-5'>
                        <div className='w-full h-48 rounded-small lg:rounded-none lg:h-full xl:h-80 bg-[url(/assets/images/quokkabottles-Cs3X40zb4kQ-unsplash.jpg)] bg-cover bg-center relative'>
                            <p className='text-sm absolute top-3 left-4 lg:hidden'>2024 - Equinx</p>
                            <div className='text-charcoal w-full hidden lg:flex justify-between items-end pr-12 -translate-y-14'>
                                <h2 className='font-soligant text-4xl lg:-translate-x-5'>Lets Connect</h2>
                                <Link href={'/contact-us'} className='pb-1 border-b h-fit !border-black'>
                                    Contact Us
                                </Link>
                            </div>
                            <div className='absolute right-5 top-1/2 -translate-y-10 lg:right-48 lg:top-0 lg:-translate-y-10'>
                                <Link href={'/contact-us'} className=''>
                                    <div className='h-16 w-16 lg:h-20 lg:w-20 flex justify-center items-center text-white bg-[#778F95] rounded-full'>
                                        <IoMdMail className='text-xl lg:text-2xl' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default About