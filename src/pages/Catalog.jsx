import Navbar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";
import NavbarMobile from '@/components/NavbarMobile';

const Catalog = () => {
    return (
        <main className='mih-h-screen w-full bg-sand pt-4'>
            <div className='w-full px-4'>
                <Navbar />
                <NavbarMobile />
            </div>

            <div className='w-full flex-col flex lg:flex-row justify-between items-center px-4 mt-8 gap-y-8 lg:gap-y-0'>
                <div className='flex font-soligant self-start lg:self-auto text-xs lg:text-xl font-light gap-x-10'>
                    <h2>Design Is So Simple</h2>
                    <h2>Design Is So Simple</h2>
                </div>

                <div className='w-28 h-20 lg:w-44 lg:h-28 self-end lg:self-auto rounded-small bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-cover bg-center'></div>
            </div>

            <div className='mt-10 lg:mt-8 font-soligant w-full flex flex-col justify-center items-center'>
                <h2 className='text-xl lg:text-[3.5rem] translate-x-11 lg:translate-x-24'>Creating Futures</h2>
                <h1 className='flex items-center text-3xl lg:text-8xl gap-x-5 lg:gap-x-32 mt-10 lg:mt-2'>Collection
                    <Image src={'/assets/shape/shape5.svg'} className='w-8 lg:w-14' height={'400'} width={'400'} quality={100} alt='flower' />
                    Edition
                </h1>

                <ul className='flex justify-between w-full lg:w-fit lg:justify-center lg:gap-x-64 self-end lg:text-xl mt-8 px-3 lg:pr-3'>
                    <li>Ideate</li>
                    <li>Iterate</li>
                    <li>Innovate</li>
                </ul>
            </div>

            <div className='h-9 w-full bg-coffe mt-6'></div>

            <div className='w-full h-72 flex gap-x-3 lg:gap-x-6'>
                <div className='flex w-full h-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center'></div>
                <div className='flex w-full h-full bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center'></div>
                <div className='flex w-full h-full bg-[url(/assets/images/jonathan-borba-YdomJdFdbDo-unsplash.jpg)] bg-cover bg-center'></div>
                <div className='hidden lg:flex w-full h-full bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-cover bg-center'></div>
                <div className='hidden lg:flex w-full h-full bg-[url(/assets/images/xavier-teo-qK8Gjuds14k-unsplash.jpg)] bg-cover bg-center'></div>
                <div className='hidden lg:flex w-full h-full bg-[url(/assets/images/karolina-grabowska-BgrHbgtn_b0-unsplash.jpg)] bg-cover bg-center'></div>
            </div>
        </main>
    )
}

export default Catalog