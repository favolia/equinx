import Navbar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";
import NavbarMobile from '@/components/NavbarMobile';
import Link from "next/link";

const Catalog = () => {
    return (
        <main className='h-screen flex flex-col w-full bg-sand pt-4 text-charcoal overflow-y-auto'>
            <div className='w-full px-4'>
                <Navbar />
                <NavbarMobile />
            </div>

            <div className=''>
                <div className='w-full flex-col flex lg:flex-row justify-between items-center px-4 mt-8 gap-y-8 lg:gap-y-0'>
                    <div className='flex font-soligant self-start text-xs lg:text-lg font-light gap-x-10 lg:gap-x-36 lg:pl-3'>
                        <h2 className='w-20 lg:w-fit'>Igniting Perspectives</h2>
                        <h2 className='w-20 lg:w-fit'>Creativity Takes the Lead</h2>
                    </div>

                    <div className='w-36 h-24 lg:w-44 lg:h-20 self-end lg:self-auto rounded-small bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-cover bg-center'></div>
                </div>

                <div className='mt-10 lg:mt-5 font-soligant w-full flex flex-col justify-center items-center relative'>
                    <h2 className='text-xl lg:text-xl translate-x-7 lg:translate-x-24 lg:absolute top-0 lg:-translate-y-10 w-20 text-center lg:w-fit'>Beyond Bondaries</h2>
                    <h1 className='flex items-center text-3xl lg:text-6xl gap-x-5 lg:gap-x-14 mt-5'>Collection
                        <Image src={'/assets/shape/shape5.svg'} className='w-8 lg:w-14' height={'400'} width={'400'} quality={100} alt='flower' />
                        Edition
                    </h1>

                    <ul className='flex justify-between w-full lg:w-fit lg:justify-center lg:gap-x-80 self-end lg:text-xl mt-8 lg:mt-14 pl-4 pr-10 lg:pr-3'>
                        <li>Ideate</li>
                        <li>Iterate</li>
                        <li>Innovate</li>
                    </ul>
                </div>
            </div>

            <div className='h-20 lg:h-14 w-full bg-coffe mt-8 lg:mt-2'></div>

            <div className='w-full h-full flex gap-x-3 lg:gap-x-5'>
                <Link href={'/akio-detail'} className='flex w-full h-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center relative'>
                    <h3 className='absolute top-3 left-4 text-white text-[14px] lg:text-[16px]'>Akio</h3>
                </Link>
                <Link href={'/ceramics-detail'} className='flex w-full h-full bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center relative'>
                    <h3 className='absolute top-3 left-4 text-white text-[14px] lg:text-[16px]'>Ceramics</h3>
                </Link>
                <Link href={'/interior-detail'} className='flex w-full h-full bg-[url(/assets/images/jonathan-borba-YdomJdFdbDo-unsplash.jpg)] bg-cover bg-center relative'>
                    <h3 className='absolute top-3 left-4 text-white text-[14px] lg:text-[16px]'>Interior</h3>
                </Link>
                <Link href={'/restaurant-detail'} className='hidden lg:flex w-full h-full bg-[url(/assets/images/toa-heftiba-uhlTPoH2Eb0-unsplash.jpg)] bg-cover bg-center relative'>
                    <h3 className='absolute top-3 left-4 text-white text-[14px] lg:text-[16px]'>Restaurant</h3>
                </Link>
                <Link href={'/megazine-detail'} className='hidden lg:flex w-full h-full bg-[url(/assets/images/david-van-dijk-3LTht2nxd34-unsplash.jpg)] bg-cover bg-center relative'>
                    <h3 className='absolute top-3 left-4 text-white text-[14px] lg:text-[16px]'>Magazine</h3>
                </Link>
                <Link href={'#'} className='hidden lg:flex w-full h-full bg-[url(/assets/images/karolina-grabowska-BgrHbgtn_b0-unsplash.jpg)] bg-cover bg-center relative'>
                    <h3 className='absolute top-3 left-4 text-white text-[14px] lg:text-[16px]'>Glowing</h3>
                </Link>
            </div>
        </main>
    )
}

export default Catalog