import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Link from "next/link";
import StarRing from '@/components/ui/StarRing';
import ButtonStar from '@/components/ui/ButtonStar';

const About = () => {
    return (
        <main className='bg-ocean-mist min-h-screen w-full pt-4'>
            <div className='w-full px-4'>
                <Navbar background='bg-taupe-blue' />
                <NavbarMobile />
            </div>

            <div className='w-full hidden lg:flex flex-col lg:mt-7 text-charcoal'>
                <div className='w-full flex justify-between items-center px-4 pr-14'>
                    <h1 className='font-soligant text-xl leading-tight'>Resonance of<br />Progress</h1>
                    <p className='text-sm'>simplicity</p>
                    <p className='text-sm'>Triumphs</p>
                </div>

                <div className='mt-20 w-full flex justify-between'>
                    <div className=''>
                        <div className='flex items-start gap-x-14'>
                            <div className='h-72 w-40 bg-[url(/assets/images/rectangle267.png)] bg-cover bg-center'></div>
                            <div className='flex flex-col gap-y-20'>
                                <div className='flex flex-col gap-y-5'>
                                    <h1 className='font-soligant text-3xl'>Conceptualization To<br />Completion</h1>
                                    <Link href='#' className='gap-x-5 h-10 w-48 border border-black rounded-2xl flex justify-center items-center'>
                                        <div className='w-7'>
                                            <StarRing color='fill-black' />
                                        </div>
                                        Contact Us
                                    </Link>
                                </div>
                                <p className='text-sm'>A Future Scripted in Innovation and Illustrated with<br />Stunning Creativity.</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-y-16 items-center mt-12 pb-8">
                            <div className='w-full flex justify-end translate-x-9'>
                                <ul className='text-sm w-fit flex flex-col [&>li]:border-b [&>li]:border-black [&>li]:pb-3 gap-y-5'>
                                    <li className=''>
                                        Responsive design for optimal cross-device user experiences.
                                    </li>
                                    <li className=''>
                                        Intuitive UI/UX development enhancing seamless user interactions.
                                    </li>
                                    <li className=''>
                                        Continuous Learning, Adapting to Latest Technologies.
                                    </li>
                                    <li className=''>
                                        Friendly Client Communication with Transparency.
                                    </li>
                                </ul>
                            </div>
                            <div className='text-center w-96 text-xs'>
                                A glimpse into the future reveals a world where innovation and stunning design intertwine, crafting an imaginative tapestry that captures the essence of creativity
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-10 items-end justify-end'>
                        <p className='text-sm mr-14'>Everlasting</p>
                        <div className='h-[28.5rem] w-[37rem] bg-[url(/assets/images/quokkabottles-Cs3X40zb4kQ-unsplash.jpg)] bg-cover bg-center'>
                            <h1 className='text-8xl font-soligant -translate-y-28 -translate-x-16'>Creative<br />Sparks</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col px-4 mt-8 pb-9 lg:hidden'>
                <div className='w-full flex justify-between items-center font-soligant text-xs'>
                    <h3>Design Is So Simple</h3>
                    <h3>Design Is So Simple</h3>
                </div>

                <div className='font-soligant mt-16'>
                    <h2 className='mb-6'>Creating Futures</h2>
                    <div className='flex relative'>
                        <div className='h-40 w-40 rounded-xl bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-center bg-cover'></div>
                        <h1 className='w-40 text-5xl absolute bottom-0 right-0 translate-y-10 -translate-x-6'>Creating Futures</h1>
                    </div>
                </div>

                <p className='w-64 text-sm mt-20'>Formulated With Vitamin C Rich Amla, Natures Most Powerful Antioxidant SuperBerry Used For Millenia</p>

                <div className='w-full h-44 bg-[url(/assets/images/quokkabottles-Cs3X40zb4kQ-unsplash.jpg)] bg-cover bg-center pt-4 px-5 mt-6'>
                    <p className='text-lg'>2024 - Equinx</p>
                </div>

                <div className='w-full mt-7'>
                    <ul className='w-full flex flex-col gap-y-6 text-sm'>
                        <li className='flex justify-around items-center border-b border-black pb-4'>
                            <p>Frontend</p>
                            <p>Wordpress</p>
                        </li>
                        <li className='flex justify-around items-center border-b border-black pb-4'>
                            <p>Frontend</p>
                            <p>Wordpress</p>
                        </li>
                        <li className='flex justify-around items-center border-b border-black pb-4'>
                            <p>Frontend</p>
                            <p>Wordpress</p>
                        </li>
                    </ul>
                </div>

                <div className='self-center mt-6'>
                    <ButtonStar text='Contact Us' href='/contact-us' />
                </div>
            </div>
        </main>
    )
}

export default About