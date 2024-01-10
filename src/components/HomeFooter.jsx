'use client';
import React from 'react'
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ButtonOutline from './ui/ButtonOutline'

const HomeFooter = () => {
    useEffect(() => {
        Aos.init({
            once: false
        });
    }, []);

    return (
        <footer className='w-full h-96 lg:h-screen flex flex-col justify-between items-center bg-camel text-charcoal px-4 lg:px-10 py-7 lg:py-10'>
            <div className='w-full'
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay='100'
                data-aos-easing="ease-in-out">
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-sm font-soligant lg:hidden'>2024</h2>
                    <h2 className='hidden lg:block text-sm font-soligant'>Simple, yet impactful design.</h2>
                    <h2 className='text-sm font-soligant'>Carving a Timeless Legacy</h2>
                </div>
            </div>

            <div className='footer-center-anchor w-full flex justify-center items-center'>
                <h1 className='text-4xl lg:text-[7rem] font-soligant flex justify-center items-center gap-x-5 lg:gap-x-[4.5rem]'>
                    <span data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='400'
                        data-aos-easing="ease-in-out">
                        CONTACT
                    </span>
                    <div className='h-9 w-14 lg:w-40 lg:h-24 bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] rounded-small bg-cover bg-center'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='200'
                        data-aos-easing="ease-in-out"></div>
                    <span data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='400'
                        data-aos-easing="ease-in-out">
                        US
                    </span>
                </h1>
            </div>

            <div className='w-full flex justify-between items-center relative py-2 overflow-hidden'>
                <h2 className='text-xl font-soligant hidden lg:block'
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-delay='500'
                    data-aos-anchor='.footer-center-anchor'
                    data-aos-easing="ease-in-out">2024</h2>
                <div className='lg:w-full h-full lg:absolute lg:flex justify-center items-center top-0 left-0'
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-delay='500'
                    data-aos-anchor='.footer-center-anchor'
                    data-aos-easing="ease-in-out">
                    <ButtonOutline href='mailto:Equinx000@gmail.com' text='Equinx000@gmail.com' color='black' style={'rounded-full text-xs w-40 lg:w-48 lg:text-sm text-charcoal'} />
                </div>
                <h2 className='text-sm lg:text-xl font-soligant text-left'
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-delay='500'
                    data-aos-anchor='.footer-center-anchor'
                    data-aos-easing="ease-in-out">@All Right Reserved</h2>
            </div>
        </footer>
    )
}

export default HomeFooter