import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Link from "next/link";
import StarRing from '@/components/ui/StarRing';
import ButtonStar from '@/components/ui/ButtonStar';

const About = () => {
    return (
        <main className='bg-ocean-mist min-h-screen lg:h-screen flex flex-col w-full pt-4 pb-4 lg:pb-0'>
            <div className='w-full px-4 mb-8 xl:mb-10'>
                <Navbar background='bg-taupe-blue' />
                <NavbarMobile />
            </div>

            <div className='w-full flex justify-between items-center px-4 lg:px-6 pr-14 text-charcoal relative'>
                <h1 className='font-soligant text-xl leading-tight hidden lg:flex'>Resonance of<br />Progress</h1>
                <div className='lg:absolute left-0 top-0 flex lg:w-full lg:h-full justify-center items-center'>
                    <p className='text-sm font-soligant lg:font-satoshi'>simplicity</p>
                </div>
                <p className='text-sm font-soligant lg:font-satoshi'>Triumphs</p>
            </div>

            <div className='w-full px-4 font-soligant leading-5 lg:hidden mt-12 mb-2'>
                <p>Conceptualization To<br />Completion</p>
            </div>

            <div className='w-full h-full flex lg:gap-y-0 px-3 lg:px-0 flex-col lg:mt-10'>
                <div className='flex items-end gap-x-20'>
                    <div className='h-36 w-44 lg:h-28 lg:w-36 rounded-small lg:rounded-none bg-cover bg-center bg-[url(/assets/images/christine-siracusa-WW4S9msUKko-unsplash.jpg)] relative'>
                        <h3 className='absolute translate-y-9 translate-x-[7.5rem] bottom-0 right-0 text-[2.5rem] leading-[1.1] lg:hidden font-soligant'>Creative<br />Sparks</h3>
                    </div>
                    <div className='hidden lg:flex flex-col gap-y-6'>
                        <h3 className='text-xl font-soligant w-52'>
                            Conceptualization To Completion
                        </h3>
                        <ButtonStar color='black' style='!border-black' />
                    </div>
                </div>

                <div className='lg:hidden pr-5 mb-10 mt-16'>
                    <p className='text-sm'>
                        A Future Scripted in Innovation and Illustrated with Stunning Creativity.
                    </p>
                </div>

                <div className='flex flex-col-reverse gap-y-4 lg:gap-y-0 lg:flex-row xl:gap-x-40 w-full h-full'>
                    <div className='w-full lg:min-w-[40rem] flex gap-y-7 lg:gap-y-0 flex-col justify-between items-center relative lg:pt-8'>
                        <ul className='lg:translate-x-14 flex flex-col text-xs lg:text-sm lg:scale-95 xl:scale-100 xl:translate-y-5 xl:text-base xl:translate-x-24 w-fit [&>li]:border-b-black [&>li]:border-b [&>li]:py-3 lg:[&>li]:py-2'>
                            <li>Responsive design for optimal cross-device user experiences.</li>
                            <li>Intuitive UI/UX development enhancing seamless user interactions.</li>
                            <li>Continuous Learning, Adapting to Latest Technologies.</li>
                            <li>Friendly Client Communication with Transparency.</li>
                        </ul>

                        <div className='lg:w-full lg:h-full pb-3 lg:absolute bottom-0 left-0 flex justify-center items-end'>
                            <p className='text-center hidden lg:flex text-xs lg:w-96'>
                                A glimpse into the future reveals a world where innovation and stunning design intertwine, crafting an imaginative tapestry that captures the essence of creativity
                            </p>
                            <div className='lg:hidden'>
                                <ButtonStar />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-y-3 lg:pt-5'>
                        <div className='w-full h-48 lg:h-full bg-[url(/assets/images/quokkabottles-Cs3X40zb4kQ-unsplash.jpg)] bg-cover bg-center relative'>
                            <p className='text-sm absolute top-3 left-4 lg:hidden'>2024 - Equinx</p>
                            <div className='text-charcoal w-full hidden lg:flex justify-between pr-12 -translate-y-14'>
                                <h2 className='font-soligant text-4xl lg:-translate-x-5'>Creative Sparks</h2>
                                <p className='text-sm'>Everlasting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default About