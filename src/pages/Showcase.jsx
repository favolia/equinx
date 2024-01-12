import ButtonStar from '@/components/ui/ButtonStar'
import React from 'react'
import Link from "next/link";
import NavbarMobile from '@/components/NavbarMobile';

const Showcase = () => {
    return (
        <main className='w-full min-h-screen flex flex-col bg-white px-4 lg:px-0 pt-4 pb-14 lg:py-0'>
            <div className='lg:hidden w-full'>
                <NavbarMobile withMenu />
            </div>

            <div className='lg:hidden text-xs font-soligant flex justify-between w-full pr-10 mt-8'>
                <p>simplicity</p>
                <p>Triumphs</p>
            </div>

            <div className='lg:hidden w-full flex justify-center items-center mt-8'>
                <div className='w-36 h-32 bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-cover bg-center rounded-small'></div>
            </div>

            <div className='lg:hidden w-full flex justify-center items-center mt-8 mb-10'>
                <h1 className='font-soligant text-[2.5rem]'>Study Case</h1>
            </div>

            <div className='flex flex-col-reverse lg:flex-row w-full h-full'>

                <div className='w-full lg:h-screen flex flex-col justify-between lg:px-8 lg:pt-8 lg:pb-5'>
                    <div className='text-charcoal w-full hidden lg:flex justify-between items-center'>
                        <h3>Equinx</h3>
                        <h1 className='font-soligant lg:text-2xl xl:text-3xl'>Study Case</h1>
                        <ButtonStar href='/' text='Back To Home' />
                    </div>

                    <div className='w-full flex justify-center items-center mt-10'>
                        <ul className='w-full lg:w-fit flex flex-col gap-y-2 [&>li]:border-b [&>li]:border-black'>
                            <li>
                                <Link href='/akio-detail' className="flex lg:gap-x-80 py-2 justify-center lg:justify-between items-end">
                                    <h1 className='text-2xl lg:text-4xl xl:text-5xl font-soligant lg:pb-1'>Akio</h1>
                                    <div className='rounded-small hidden lg:block lg:h-16 lg:w-28 xl:h-20 xl:w-40 bg-[url(/assets/images/quokkabottles-bFkBNA8nmRY-unsplash.png)] bg-cover bg-center'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/akio-detail' className="flex lg:gap-x-80 py-2 justify-center lg:justify-between items-end">
                                    <h1 className='text-2xl lg:text-4xl xl:text-5xl font-soligant lg:pb-1'>Interior</h1>
                                    <div className='rounded-small hidden lg:block lg:h-16 lg:w-28 xl:h-20 xl:w-40 bg-[url(/assets/images/spacejoy-c0JoR_-2x3E-unsplash.jpg)] bg-cover bg-center'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/akio-detail' className="flex lg:gap-x-80 py-2 justify-center lg:justify-between items-end">
                                    <h1 className='text-2xl lg:text-4xl xl:text-5xl font-soligant lg:pb-1'>Ceramics</h1>
                                    <div className='rounded-small hidden lg:block lg:h-16 lg:w-28 xl:h-20 xl:w-40 bg-[url(/assets/images/karolina-grabowska-25KEp7ApksY-unsplash.jpg)] bg-cover bg-center'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/akio-detail' className="flex lg:gap-x-80 py-2 justify-center lg:justify-between items-end">
                                    <h1 className='text-2xl lg:text-4xl xl:text-5xl font-soligant lg:pb-1'>Restaurant</h1>
                                    <div className='rounded-small hidden lg:block lg:h-16 lg:w-28 xl:h-20 xl:w-40 bg-[url(/assets/images/toa-heftiba-uhlTPoH2Eb0-unsplash.jpg)] bg-cover bg-center'></div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full hidden lg:flex justify-center items-center lg:mt-12'>
                        <p className='text-sm'>Study Case EQUINX</p>
                    </div>
                </div>

                <div className='w-full h-44 lg:w-96 lg:min-w-96 xl:w-[27rem] xl:min-w-[27rem] lg:h-screen bg-[url(/assets/images/quokkabottles-Cs3X40zb4kQ-unsplash.jpg)] bg-cover bg-center relative'>
                    <p className='lg:hidden absolute top-2 left-4 text-sm font-light'>2024 - Equinx</p>
                </div>

            </div>

            <div className='lg:hidden w-full flex justify-center mt-16'>
                <ButtonStar href='/' text='Back To Home' />
            </div>
        </main>
    )
}

export default Showcase