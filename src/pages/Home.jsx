'use client';
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Navbar from '@/components/Navbar';
import { IoArrowRedoSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import ButtonStar from '@/components/ui/ButtonStar';
import BlurButton from '@/components/ui/BlurButton';
import AkioLabel from '@/components/ui/AkioLabel';
import NavbarMobile from '@/components/NavbarMobile';
import StarBlink from '@/components/ui/StarBlink';
import HomeFooter from '@/components/HomeFooter';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const Home = () => {
    const scroll = useScrollPosition()


    return (
        <>
            <main className='w-full'>
                <header className='w-full h-screen lg:flex flex-col justify-between bg-[url(/assets/images/pexels-koolshooters-6976102.jpg)] bg-cover bg-center pt-4'>
                    <div className={`px-3 lg:px-4`}>
                        <Navbar background={`bg-white/5 backdrop-blur-2xl`} />
                        <NavbarMobile style={'text-white backdrop-blur-2xl rounded-small py-2 bg-white/5 px-5'} />
                    </div>

                    <div className={`px-3 lg:px-4 fixed ${scroll > 500 ? 'top-4 duration-500' : '-top-full duration-1000'} delay-0 w-full transition-all ease-in-out z-50`}>
                        <Navbar background={`bg-white/5 backdrop-blur-2xl`} />
                        <NavbarMobile style={'text-white backdrop-blur-2xl rounded-small py-2 bg-white/5 px-5'} />
                    </div>

                    <div className='w-full flex flex-col gap-y-10 pl-4 lg:pl-12 mt-8 translate-y-10 lg:translate-y-0 lg:pb-10'>
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

                <div className='w-full bg-coffe text-white pt-10 pb-24 lg:pt-14 lg:pb-40 px-4 lg:px-0'>
                    <div className='w-full lg:text-lg flex justify-between items-end lg:px-8'>
                        <h4 className='hidden lg:flex'>GOOD DESIGN</h4>
                        <p className='capitalize lg:lowercase'>solutions</p>
                        <h4 className='font-soligant'>Catalog 02</h4>
                    </div>

                    <div className='flex flex-col lg:flex-row w-full justify-between mt-14 lg:mt-60'>

                        <div className=''>
                            <div className='lg:px-8'>
                                <div className='w-fit lg:gap-x-60 flex justify-between items-center'>
                                    <h1 className='flex text-3xl lg:text-5xl font-soligant'>Empowering<br />Innovation</h1>
                                    <p className='hidden lg:flex text-sm lg:text-xl font-soligant'>User-Centric Design</p>
                                </div>
                            </div>

                            <div className='flex mt-5 lg:mt-0'>
                                <div className='w-full h-60 lg:w-[45rem] lg:h-[34rem] bg bg-[url(/assets/images/anton-sukhinov-4GvsTa3Y-5I-unsplash.jpg)] bg-cover bg-center relative'>
                                    <h3 className='lg:hidden font-soligant absolute bottom-5 left-2 text-sm font-light'>Acknowledging the request</h3>
                                </div>
                                <h1 className='hidden lg:flex w-44 lg:w-64 text-3xl lg:text-5xl font-soligant ml-7 mt-9'>Infusing Tech with Art</h1>
                            </div>

                        </div>

                        <div className='flex flex-col items-center lg:items-start gap-y-2 mt-10 lg:mt-0'>
                            <p className=' lg:text-lg font-light leading-3 text-center lg:text-start'>Clear<br />Communication</p>
                            <div className='mt-2 w-60 h-96 lg:w-52 lg:h-72 rounded-small lg:rounded-r-none bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center'></div>
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

                <div className='w-full flex flex-col justify-between items-center gap-y-16 lg:gap-y-0 lg:h-[150vh] px-2 lg:pl-6 lg:pr-4 pt-10 pb-16 lg:pt-20 lg:pb-28 bg-camel'>

                    <div className='w-full flex flex-col gap-y-10 lg:flex-row justify-between items-center'>
                        <div className='flex text-sm gap-x-48'>
                            <p className='hidden lg:flex'>Creativity</p>
                            <p>Beyond Enchoes</p>
                        </div>

                        <div>
                            <AkioLabel style={'bg-cream text-charcoal'} />
                        </div>
                    </div>

                    <div className='w-full lg:w-[38rem] h-[15rem] lg:h-96 flex gap-x-2 lg:gap-x-5 lg:scale-125'>
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
                        <p className='text-xs w-72 text-end hidden lg:flex'>Shape your website to be effortlessly traversed—an instinctive and enjoyable sojourn</p>
                    </div>

                </div>

                <div className='w-full h-[125vh] lg:h-[260vh] bg-coffe flex justify-center items-end relative'>

                    <div className='absolute top-0 left-0 h-full w-full pt-16 lg:pt-10 lg:pb-16 lg:flex flex-col justify-center'>
                        <div className='w-full flex flex-col justify-center gap-y-2 items-center px-4 lg:px-14'>
                            <h1 className='lg:hidden text-3xl text-white font-soligant w-64 -translate-x-3'>Digital Odyssey Awaits</h1>

                            <div className='w-full h-60 lg:h-[52rem] flex flex-col justify-between items-start bg-[url(/assets/images/katelyn-perry-8gvg4nouS3k-unsplash.jpg)] bg-center bg-cover px-3 py-6 lg:px-10 lg:py-8 z-20 rounded-small'>
                                <div></div>
                                <h1 className='hidden lg:flex font-soligant text-7xl w-[28rem] text-white'>Digital Odyssey Awaits</h1>
                                <div>
                                    <ButtonStar text='Visit Site' color='black' />
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-between items-center px-4 mt-8 lg:mt-16 lg:px-8'>
                            <h1 className='font-soligant text-3xl lg:text-6xl text-charcoal'>Catalogue</h1>
                            <div className='hidden lg:flex'>
                                <ButtonStar text='Visit Site' color='black' />
                            </div>
                        </div>

                        <div className='w-full h-60 lg:h-[30rem] [&>div]:rounded-small px-2 flex gap-x-3 lg:gap-x-5 mt-6 lg:mt-10'>

                            <div className='w-full h-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center'></div>
                            <div className='w-full h-full bg-[url(/assets/images/anita-austvika-1u_jqIVZWLQ-unsplash.jpg)] bg-cover bg-center'></div>
                            <div className='w-full h-full hidden lg:flex bg-[url(/assets/images/jonathan-borba-YdomJdFdbDo-unsplash.jpg)] bg-cover bg-center'></div>
                            <div className='w-full h-full hidden lg:flex bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] bg-cover bg-center'></div>

                        </div>
                    </div>

                    <div className='bg-camel w-full h-[84vh] lg:h-[145vh]'></div>
                </div>

                <div className='w-full flex-col flex lg:flex-row h-screen relative text-white'>
                    <div className='absolute top-0 left-0 w-full hidden lg:flex justify-between items-center text-sm p-6'>
                        <p className='text-lg font-soligant'>intuitive</p>
                        <p>aesthetics</p>
                        <p>visionary</p>
                    </div>

                    <div className='w-full h-full bg-dark-coffee pt-8 pb-12 lg:pt-0 lg:pb-4 px-4 lg:px-0'>
                        <div className='w-full h-full flex flex-col lg:justify-end items-center lg:items-start'>
                            <h1 className='w-48 text-3xl lg:text-4xl font-soligant text-center lg:text-start px-4 lg:px-8'>
                                Personalized
                                Adventure
                            </h1>

                            <div className='flex gap-x-20 self-center px-4 mt-5 lg:mt-10'>
                                <div className='w-36 h-44 lg:w-44 lg:h-56 rounded-small bg-seashell-whisper relative'>
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                        <Image className='w-9 lg:w-12' src={'/assets/images/3.png'} width={400} height={400} priority quality={100} loading='eager' alt='Akio brown bottle' />
                                    </div>

                                    <div className='w-full h-full text-charcoal pt-4 pb-3 text-xs flex flex-col justify-between items-center'>
                                        <p className='z-10'>Product</p>
                                        <p className='z-10'>Akio Bottle</p>
                                    </div>
                                </div>

                                <ul className='hidden lg:block space-y-2 text-sm -translate-y-7 translate-x-8'>
                                    <li>
                                        <Link href={'https://akio-ds.vercel.app/'}>
                                            Akio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'https://ceramics-ds.vercel.app/'}>
                                            Ceramics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'https://interior-ds.vercel.app/'}>
                                            Interior
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            Restaurant
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            Megazine
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
                                <Link href='#'>
                                    <div className='h-11 w-11 bg-coffee-bean rounded-full flex justify-center items-center'>
                                        <AiOutlineSearch />
                                    </div>
                                </Link>

                                <button>
                                    <div className='h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-full text-charcoal bg-cream'>
                                        <MdArrowRightAlt className='text-3xl' />
                                    </div>
                                </button>
                            </div>

                            <div className='w-full mt-10 lg:mt-4'>
                                <p className='text-xs lg:text-center'>
                                    Eco-friendly bottles that are durable and can b c<br />customized according to
                                    your taste
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:min-w-[38rem] h-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center relative lg:static'>
                        <div className='absolute -translate-y-8 right-4 top-0 -rotate-45 lg:hidden'>
                            <button>
                                <div className='h-[4.5rem] w-[4.5rem] flex justify-center items-center rounded-full text-charcoal bg-cream'>
                                    <MdArrowRightAlt className='text-3xl' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-coffe text-white py-10'>
                    <ul className='w-fulll text-lg lg:text-base font-soligant flex justify-between px-4 lg:px-12'>
                        <li>Ideate</li>
                        <li>Iterate</li>
                        <li className='hidden lg:flex'>Innovate</li>
                    </ul>

                    <div className='w-full flex flex-col items-end px-6 mt-16 gap-y-12'>
                        <div className='h-48 lg:h-60 w-full lg:w-96 flex gap-x-2 scale-75 lg:scale-100'>
                            <div className='h-full w-full bg-[url(/assets/images/simone-hutsch-ItvVUpgac0o-unsplash.jpg)] bg-cover bg-center rounded-small'></div>
                            <div className='h-full w-full bg-[url(/assets/images/pierre-chatel-innocenti-LyqexsJzyLI-unsplash.jpg)] bg-cover bg-center rounded-small'></div>
                        </div>

                        <div className='hidden lg:flex gap-x-20 self-start'>
                            <h3 className='leading-4 font-soligant'>Exceptional<br />craftmanship</h3>
                            <h3 className='leading-4 font-soligant'>Satisfying the<br />inquiry</h3>
                        </div>
                    </div>

                    <div className='w-fit px-4 flex flex-col mt-10 lg:mt-16'>
                        <h1 className='font-soligant text-[2.8rem] lg:text-8xl'>
                            Creating Futures
                        </h1>
                        <p className='hidden lg:flex text-xs translate-x-44'>accuracy</p>
                    </div>

                    <div className='flex justify-between items-center pl-4 pr-12 lg:pl-10 lg:pr-4 mt-10 lg:mt-16'>
                        <div className='h-16 lg:w-20 w-16 lg:h-20 rounded-full flex justify-center items-center bg-white'>
                            <Image src={'/assets/shape/shape3.svg'} className='w-7 fill-black' width={400} height={400} quality={100} priority loading='eager' />
                        </div>
                        <p className='text-sm lg:text-xs self-end'>captivating</p>
                        <p className='text-xs text-end hidden lg:flex'>
                            an innovative digital space where possibilities unfold at<br />the speed of quantum leaps
                        </p>
                    </div>

                </div>

            </main>
            <HomeFooter />
        </>
    )
}

export default Home