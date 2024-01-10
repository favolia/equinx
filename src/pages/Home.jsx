'use client';
import React from 'react'
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Link from "next/link";
import Navbar from '@/components/Navbar';
import { IoArrowRedoSharp } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import ButtonStar from '@/components/ui/ButtonStar';
import Label from '@/components/ui/Label';
import NavbarMobile from '@/components/NavbarMobile';
import StarBlink from '@/components/ui/StarBlink';
import HomeFooter from '@/components/HomeFooter';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import ButtonOutline from '@/components/ui/ButtonOutline';

const Home = () => {
    const scroll = useScrollPosition()

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <>
            <main className='w-full'>
                <header className='header-anchor w-full h-screen flex lg:flex flex-col justify-between bg-[url(/assets/images/Hero.jpg)] bg-cover bg-left lg:bg-center pt-4'>
                    <div className={`px-3 lg:px-4`}>
                        <Navbar background={`bg-white/5 backdrop-blur-2xl`} />
                        <NavbarMobile style={'text-white backdrop-blur-2xl rounded-small py-2 bg-white/5 px-5'} />
                    </div>

                    <div className={`px-3 lg:px-4 fixed ${scroll > 500 ? 'top-4 duration-500' : '-top-full duration-1000'} delay-0 w-full transition-all ease-in-out z-50`}>
                        <Navbar background={`bg-white/5 backdrop-blur-2xl`} />
                        <NavbarMobile style={'text-white backdrop-blur-2xl rounded-small py-2 bg-white/5 px-5'} />
                    </div>

                    <div className='w-full flex flex-col gap-y-10 pl-4 h-full lg:h-fit lg:pl-12 mt-8 justify-end lg:translate-y-0 pb-8 lg:pb-10'>
                        <div className='w-full lg:h-96 flex flex-col lg:flex-row lg:justify-between lg:items-end pr-4 gap-y-20 lg:gap-y-0'>
                            <div className='flex flex-col gap-y-6 text-coffe-latte lg:translate-y-20 z-10'>
                                <h1 className='text-3xl lg:text-5xl font-abril_fatface lg:w-96'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out"
                                >Designing digital symphonies</h1>
                                <p className="w-[26rem] text-sm text-coffe-latte hidden lg:block"
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">
                                    We're devoted to designing and developing exceptional websites.
                                    Through enduring partnerships, our aim is clear – to push your
                                    business forward and amplify customer satisfaction by creating
                                    seamless, digital narratives
                                </p>
                                <p className='text-xs w-52 text-coffe-latte lg:hidden'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">
                                    We're devoted to designing and developing exceptional websites.
                                    Through enduring partnerships, our aim is clear – to push your
                                    business forward
                                </p>
                                <div className='button-anchor'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='500'
                                    data-aos-easing="ease-in-out">
                                    <ButtonStar href='/about' starSize={'fill-coffe-latte'} text='Our Strategy' color='coffe-latte' style='w-40 rounded-full gap-x-2 text-sm lg:text-base lg:gap-x-5 lg:rounded-2xl lg:w-48 border-coffe-latte lg:mt-8' />
                                </div>
                            </div>

                            <div className='h-28 w-40 lg:h-36 lg:w-56 flex justify-end items-end lg:items-end p-2 self-end lg:self-start rounded-small bg-[url(/assets/images/tino-rischawy-7X1zd1uI0HI-unsplash.jpg)] bg-cover bg-center'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-easing="ease-in-out"
                            >
                                <Link href={'#'} className='h-8 w-8 lg:h-10 lg:w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center'>
                                    <IoArrowRedoSharp className='text-xs text-white' />
                                </Link>
                            </div>

                        </div>

                        <div className='w-full flex justify-between items-center relative mt-7 pb-3 lg:pb-0 lg:mt-0 lg:pr-4'
                            data-aos="fade-up"
                            data-aos-duration={500}
                            data-aos-delay='500'
                            data-aos-anchor='.button-anchor'
                            data-aos-easing="ease-in-out">
                            <div className='hidden lg:block'></div>

                            <div className='absolute lg:static w-full lg:w-fit flex justify-start lg:justify-center'>
                                <Label style={'bg-[#D98626]/5 text-coffe-latte'} />
                            </div>

                            <Link href={'/contact-us'} className='hidden lg:block font-light text-white'>Get In Touch</Link>
                        </div>
                    </div>

                </header>

                <div className='w-full bg-coffe text-white pt-10 pb-16 lg:pt-14 lg:pb-40 px-4 lg:px-0'>
                    <div className='w-full text-sm lg:text-lg flex justify-between items-center lg:items-start lg:px-8 relative'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-easing="ease-in-out">
                        <h4 className='lg:flex lg:w-60'>Harmony between<br className='lg:hidden' /> function, design, and tech</h4>
                        <h4 className='lg:flex lg:absolute top-0 left-0 justify-center lg:w-full'>Easy precision</h4>
                        <h4 className='hidden lg:flex'>Purpose-driven encounters</h4>
                    </div>

                    <div className='flex flex-col lg:flex-row w-full lg:items-end justify-between mt-14 lg:mt-60'>

                        <div className=''>

                            <div className='flex flex-col gap-y-10 lg:gap-y-0'>
                                <div className='lg:px-8'>
                                    <div className='w-full flex flex-col gap-y-14 lg:gap-y-0 lg:flex-row justify-between lg:justify-between items-center'
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-easing="ease-in-out">
                                        <h3 className='text-xl font-abril_fatface lg:hidden'>Empowering Innovation</h3>
                                        <p className='font-light lg:font-normal text-center lg:text-start text-xl'>Digital studio partnering for<br /> people-focused solutions</p>
                                        <p className='w-[18.5rem] lg:w-64 text-sm lg:text-xs text-center lg:text-start'>
                                            We are a team of creative designers and developers committed to empowering brands in effective communication through the creation of future-focused digital products
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex justify-between'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay={200}
                                    data-aos-easing="ease-in-out">
                                    <div className='w-full rounded-small mt-5 lg:rounded-l-none h-60 lg:w-[45rem] lg:h-[34rem] bg-[url(/assets/images/anton-sukhinov-4GvsTa3Y-5I-unsplash.jpg)] bg-cover bg-center  relative'>
                                        <h3 className='lg:hidden absolute bottom-5 left-5 text-sm font-light'>Purpose-driven encounters</h3>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col items-center lg:items-start gap-y-14 lg:gap-y-8 mt-5 lg:mt-0'>
                            <p className='hidden lg:block text-lg lg:text-lg font-light leading-5 text-center lg:text-start'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='800'
                                data-aos-easing="ease-in-out">Functional focus<br /> in encounters</p>
                            <div className='mt-9 lg:mt-2 w-60 h-56 lg:w-52 lg:h-72 rounded-small lg:rounded-r-none bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-easing="ease-in-out"></div>
                            <div className='lg:hidden'>
                                <ButtonOutline href='/contact-us' text='Lets Collaborate' style={'py-6 rounded-large w-44'} />
                            </div>
                        </div>

                    </div>

                    <div className='w-full hidden lg:flex justify-between items-center pl-8 pr-4 mt-11'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-easing="ease-in-out">
                        <div className='flex justify-center items-center gap-x-60'>
                            <h4 className='font-abril_fatface text-5xl'>Empowering<br /> Innovation</h4>
                            <p className='font-light'>User-Centric Design</p>
                        </div>
                        <ButtonOutline href='/contact-us' text='Lets Collaborate' style={'w-44'} />
                    </div>
                </div>

                <div className='w-full flex flex-col justify-between items-center gap-y-12 lg:gap-y-0 lg:h-[150vh] px-2 lg:pl-6 lg:pr-4 pt-10 pb-16 lg:pt-20 lg:pb-28 bg-camel'>

                    <div className='w-full flex flex-col gap-y-10 lg:flex-row justify-between items-center'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-easing="ease-in-out">
                        <div className='flex text-sm gap-x-48'>
                            <p className='flex'>Creativity</p>
                            <p>Beyond Enchoes</p>
                        </div>

                        <div>
                            <Label title='Latest Catalog' sub='Akio Ecommerce' style={'bg-cream text-charcoal'} />
                        </div>
                    </div>

                    <div className='w-full lg:w-[38rem] h-[15rem] lg:h-96 flex gap-x-2 lg:gap-x-5 lg:scale-125 overflow-hidden'>
                        <div className='w-full h-full flex flex-col justify-between items-center py-5 bg-cream rounded-small'
                            data-aos="fade-up"
                            data-aos-duration={500}
                            data-aos-delay='100'
                            data-aos-easing="ease-in-out">
                            <div className='w-full flex gap-x-3 lg:gap-x-5 justify-center items-center'>
                                <StarBlink style={'w-7 lg:w-10 fill-black'} />
                                <h3 className='hidden lg:flex text-xs lg:text-base font-soligant'>Carefully develop</h3>
                                <h3 className='font-soligant text-center lg:hidden'>Carefully<br />Develop</h3>
                                <StarBlink style={'w-7 lg:w-10 fill-black'} />
                            </div>

                            <div className='w-28 h-24 lg:w-48 lg:h-44 rounded-[70px] bg-[url(/assets/images/Develop.jpg)] bg-cover bg-center'></div>

                            <div data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='100'
                                data-aos-easing="ease-in-out">
                                <Link href={'/about'} className='w-28 h-6 lg:w-40 lg:h-10 flex justify-center items-center text-xs rounded-[18px] bg-[#CED0B8]'>
                                    About
                                </Link>
                            </div>

                        </div>

                        <div className='w-full h-full flex flex-col justify-between items-center py-5 bg-[#CED0B8] rounded-small'
                            data-aos="fade-up"
                            data-aos-duration={500}
                            data-aos-delay='100'
                            data-aos-easing="ease-in-out">
                            <div className='w-full flex gap-x-3 lg:gap-x-5 justify-center items-center'>
                                <StarBlink style={'w-7 lg:w-10 fill-black lg:fill-white'} />
                                <h3 className='hidden lg:flex text-xs lg:text-base font-soligant'>Visionary concepts</h3>
                                <h3 className='font-soligant text-center lg:hidden'>Visionary<br />Concepts</h3>
                                <StarBlink style={'w-7 lg:w-10 fill-black lg:fill-white'} />
                            </div>

                            <div className='w-28 h-24 lg:w-48 lg:h-44 rounded-[70px] bg-[url(/assets/images/mo-mM5HPB6uTVs-unsplash.jpg)] bg-cover bg-center'></div>

                            <div data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='100'
                                data-aos-easing="ease-in-out">
                                <Link href={'/catalog'} className='w-28 h-6 lg:w-40 lg:h-10 flex justify-center items-center text-xs rounded-[18px] bg-cream'>
                                    Catalogue
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-center lg:justify-between items-center'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='200'
                        data-aos-easing="ease-in-out">
                        <h1 className='text-3xl lg:text-4xl font-abril_fatface text-coffe-latte'>Method</h1>
                        <p className='text-xs lg:text-sm w-72 lg:w-80 text-end'>Through strategic insights and artistic mastery, we design web environments that captivate and inspire</p>
                    </div>

                </div>

                <div className='w-full h-[50rem] lg:h-[260vh] bg-coffe flex justify-center items-center lg:items-end relative'>

                    <div className='absolute top-0 left-0 h-full w-full pt-16 lg:pt-10 lg:pb-16 lg:flex flex-col justify-center'>
                        <div className='w-full flex flex-col justify-center gap-y-5 lg:gap-y-2 items-center px-4 lg:px-14'>
                            <h1 className='lg:hidden text-3xl text-center lg:text-start text-white font-abril_fatface w-64 -translate-x-3'>Highlighted Projects</h1>

                            <div className='w-full h-60 lg:h-[40rem] flex flex-col justify-between items-start bg-[url(/assets/images/katelyn-perry-8gvg4nouS3k-unsplash.jpg)] bg-bottom bg-cover px-3 py-6 lg:px-10 lg:py-8 z-20 rounded-small relative'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-easing="ease-in-out">
                                <div></div>
                                <h1 className='hidden lg:flex font-abril_fatface leading-snug text-7xl w-[28rem] text-white' data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">Highlighted Projects</h1>
                                <div className='scale-75 lg:scale-100 absolute top-2 -left-4 lg:static'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">
                                    <Label title='Ceramics Ecommerce' images='/images/tino-rischawy-7X1zd1uI0HI-unsplash.jpg' style={'bg-[#CC961B]'} sub='Visit Site' textVariant={2} />
                                </div>
                                <div className='lg:hidden absolute bottom-5 right-5'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='300'
                                    data-aos-easing="ease-in-out">
                                    <Link href={'/ceramics-detail'} className='h-8 w-8 lg:h-10 lg:w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center'>
                                        <IoArrowRedoSharp className='text-xs text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-between items-end px-4 mt-8 lg:mt-24 lg:px-8'
                            data-aos="fade-up"
                            data-aos-duration={500}
                            data-aos-easing="ease-in-out">
                            <h1 className='font-abril_fatface text-3xl lg:text-6xl text-coffe-latte'>Catalogue</h1>
                            <Link href={'/catalog'} className='text-lg'>More</Link>
                        </div>

                        <div className='w-full h-60 lg:h-[34rem] [&>div]:rounded-small px-2 lg:px-4 flex gap-x-3 lg:gap-x-7 mt-6 lg:mt-10'>

                            <Link href={'/akio-detail'} className='w-full overflow-hidden rounded-small h-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center relative'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='200'
                                data-aos-easing="ease-in-out">
                                <div className='absolute flex flex-col justify-between text-white py-4 px-3 w-full h-full left-0 top-0'>
                                    <p className='lg:text-lg'>Akio</p>
                                    <div className='h-8 w-8 lg:h-10 lg:w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center'
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-easing="ease-in-out">
                                        <IoArrowRedoSharp className='text-xs text-white' />
                                    </div>
                                </div>
                            </Link>
                            <Link href={'/ceramics-detail'} className='w-full overflow-hidden rounded-small h-full bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center relative'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='250'
                                data-aos-easing="ease-in-out">
                                <div className='absolute flex flex-col justify-between text-white py-4 px-3 w-full h-full left-0 top-0'>
                                    <p className='lg:text-lg'>Ceramics</p>
                                    <div className='h-8 w-8 lg:h-10 lg:w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center' data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay='50'
                                        data-aos-easing="ease-in-out">
                                        <IoArrowRedoSharp className='text-xs text-white' />
                                    </div>
                                </div>
                            </Link>
                            <Link href={'/interior-detail'} className='w-full overflow-hidden rounded-small h-full hidden lg:flex bg-[url(/assets/images/jonathan-borba-YdomJdFdbDo-unsplash.jpg)] bg-cover bg-center relative'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='300'
                                data-aos-easing="ease-in-out">
                                <div className='absolute flex flex-col justify-between text-white py-4 px-3 w-full h-full left-0 top-0'>
                                    <p className='lg:text-lg'>Interior</p>
                                    <div className='h-8 w-8 lg:h-10 lg:w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center'
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay='100'
                                        data-aos-easing="ease-in-out">
                                        <IoArrowRedoSharp className='text-xs text-white' />
                                    </div>
                                </div>
                            </Link>
                            <Link href={'/restaurant-detail'} className='w-full overflow-hidden rounded-small h-full hidden lg:flex bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-cover bg-center relative'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='350'
                                data-aos-easing="ease-in-out">
                                <div className='absolute flex flex-col justify-between text-white py-4 px-3 w-full h-full left-0 top-0'>
                                    <p className='lg:text-lg'>Restaurant</p>
                                    <div className='h-8 w-8 lg:h-10 lg:w-10 bg-white/5 rounded-full backdrop-blur-2xl flex justify-center items-center'
                                        data-aos="fade-up"
                                        data-aos-duration={500}
                                        data-aos-delay='150'
                                        data-aos-easing="ease-in-out">
                                        <IoArrowRedoSharp className='text-xs text-white' />
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div className='bg-camel w-full h-[50vh] lg:h-[175vh]'></div>
                </div>

                <div className='w-full flex-col flex lg:flex-row bg-dark-coffee min-h-screen lg:h-screen relative text-white'>

                    <div className='w-full h-full pt-14 pb-16 lg:pt-0 lg:pb-7 xl:pb-10 px-4 lg:px-0'>
                        <div className='w-full h-full flex flex-col lg:justify-end items-center lg:items-start'>
                            <h1 className='lg:w-96 text-3xl lg:text-4xl lg:-translate-y-12 font-abril_fatface text-center lg:text-start px-4 lg:px-8'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-easing="ease-in-out">
                                Tailored Digital Identity
                            </h1>

                            <div className='flex gap-x-20 self-center px-4 mt-12 lg:mt-10 xl:mt-14'>
                                <div className='w-36 h-44 lg:w-44 lg:h-56 rounded-small bg-seashell-whisper relative'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                        <Image className='w-9 lg:w-12' src={'/assets/images/3.png'} width={400} height={400} priority quality={100} loading='eager' alt='Akio brown bottle' />
                                    </div>

                                    <div className='w-full h-full text-charcoal pt-4 pb-3 text-xs flex flex-col justify-between items-center'>
                                        <p className='z-10'>Product</p>
                                        <p className='z-10'>Akio Bottle</p>
                                    </div>
                                </div>

                                <ul className='hidden lg:block space-y-2 text-sm -translate-y-7 translate-x-8'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='500'
                                    data-aos-easing="ease-in-out">
                                    <li>
                                        <Link href={'/akio-detail'}>
                                            Akio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/ceramics-detail'}>
                                            Ceramics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/interior-detail'}>
                                            Interior
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/restaurant-detail'}>
                                            Restaurant
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/magazine-detail'}>
                                            Magazine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            Glowing
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='w-full hidden lg:flex translate-x-9 justify-between items-center mt-6'>
                                <Link href='#'
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">
                                    <div className='h-11 w-11 bg-[url(/assets/images/quokkabottles-bFkBNA8nmRY-unsplash.png)] bg-cover bg-center rounded-full'></div>
                                </Link>

                                <button
                                    data-aos="fade-up"
                                    data-aos-duration={500}
                                    data-aos-delay='200'
                                    data-aos-easing="ease-in-out">
                                    <div className='h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-full text-charcoal bg-cream'>
                                        <MdArrowRightAlt className='text-4xl lg:text-3xl' />
                                    </div>
                                </button>
                            </div>

                            <div className='w-full flex justify-center mt-20 lg:mt-4'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='400'
                                data-aos-easing="ease-in-out">
                                <p className='text-xs w-64 lg:w-96 text-center'>
                                    We blend careful analysis, technical expertise, and design with clear communication, creating exceptional projects with a positive vibe
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:min-w-[38rem] h-[21rem] lg:h-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center relative lg:static'>
                        <div className='absolute -translate-y-10 rounded-full right-6 top-0 -rotate-45 lg:hidden'>
                            <button>
                                <div className='h-24 w-24 flex justify-center items-center rounded-full text-charcoal bg-cream'>
                                    <MdArrowRightAlt className='text-3xl' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-coffe text-white py-14 lg:pt-20 xl:pt-32 lg:pb-24'>
                    <ul className='w-full text-lg lg:text-base xl:text-lg font-soligant flex justify-between px-4 lg:pl-10 lg:pr-32'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='100'
                        data-aos-easing="ease-in-out">
                        <li>Design</li>
                        <li>Development</li>
                        <li className='hidden lg:flex'>Maintenance</li>
                    </ul>

                    <div className='w-full flex flex-col items-end px-10 mt-20 gap-y-12'>
                        <div className='h-52 lg:h-60 w-full lg:w-96 flex gap-x-2 scale-90 lg:scale-100'>
                            <div className='h-full w-full bg-[url(/assets/images/simone-hutsch-ItvVUpgac0o-unsplash.jpg)] bg-cover bg-center rounded-small'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='120'
                                data-aos-easing="ease-in-out"></div>
                            <div className='h-full w-full bg-[url(/assets/images/pierre-chatel-innocenti-LyqexsJzyLI-unsplash.jpg)] bg-cover bg-center rounded-small'
                                data-aos="fade-up"
                                data-aos-duration={500}
                                data-aos-delay='100'
                                data-aos-easing="ease-in-out"></div>
                        </div>

                        <div className='hidden lg:flex gap-x-32 self-start lg:text-lg xl:text-xl'
                            data-aos="fade-up"
                            data-aos-duration={500}
                            data-aos-delay='300'
                            data-aos-easing="ease-in-out">
                            <h3 className='leading-snug font-soligant'>Website<br />Development</h3>
                            <h3 className='leading-snug font-soligant'>Frontend<br />Development</h3>
                            <h3 className='leading-snug font-soligant'>Backend<br />Development</h3>
                        </div>
                    </div>

                    <div className='areas-of-expertise-anchor w-fit px-4 lg:px-10 flex flex-col mt-20 lg:mt-16 xl:mt-20'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='400'
                        data-aos-easing="ease-in-out">
                        <h1 className='font-abril_fatface text-[2rem] lg:text-8xl'>
                            Areas Of Expertise
                        </h1>
                    </div>

                    <div className='w-full flex justify-between items-start lg:items-center lg:gap-x-56 pl-4 pr-12 lg:px-10 mt-10 lg:mt-32 xl:mt-56'
                        data-aos="fade-up"
                        data-aos-duration={500}
                        data-aos-delay='200'
                        data-aos-easing="ease-in-out">
                        <Link href={'/contact-us'} className='h-11 min-w-fit px-7 gap-x-3 rounded-full flex justify-center items-center bg-white'>
                            <Image src={'/assets/shape/shape3.svg'} className='w-6 fill-black' width={400} height={400} quality={100} priority loading='eager' />
                            <p className='text-charcoal text-sm'>Start Project</p>
                        </Link>
                        <ul className='lg:w-full font-soligant gap-y-1 lg:gap-y-0 flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm lg:font-satoshi'>
                            <li className='lg:hidden'>Webite Development</li>
                            <li className='lg:hidden'>Frontend Development</li>
                            <li className='lg:hidden'>Backend Development</li>
                            <li>UI/UX Design</li>
                            <li>Seo Optimization</li>
                            <li>Website Support</li>
                        </ul>
                    </div>

                </div>
            </main>
            <HomeFooter />
        </>
    )
}

export default Home