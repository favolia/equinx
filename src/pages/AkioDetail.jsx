import NavbarDetail from '@/components/NavbarDetail'
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import ButtonOutline from '@/components/ui/ButtonOutline';
import { PiHouseFill } from "react-icons/pi";
import PageIdRounded from '@/components/ui/PageIdRounded';

const AkioDetail = () => {
    return (
        <main className='w-full bg-[#3F646B]'>
            <div className='px-4 py-5 lg:pt-6 lg:pb-0'>
                <NavbarDetail />
                <NavbarMobile style={'text-white'} />
            </div>

            <header className='w-full h-[165vh] lg:h-screen flex items-end relative text-white'>
                <div className='bg-[#D8E0E2] flex justify-center lg:justify-between items-end lg:items-center pb-10 lg:pb-10 w-full h-[110vh] lg:h-[50vh] px-6'>
                    <div className='text-charcoal hidden lg:flex flex-col gap-y-4'>
                        <h1 className='text-6xl lg:text-3xl font-soligant'>Akio</h1>
                        <div className='w-60 h-28 bg-[url(/assets/akio/10.jpg)] rounded-small bg-cover bg-center'></div>
                    </div>

                    <div className='flex flex-col items-center justify-center lg:justify-start lg:items-end gap-y-10 lg:gap-y-5 text-charcoal'>
                        <h1 className='text-3xl lg:text-4xl font-soligant'>Catalog 04</h1>
                        <p className='text-center lg:text-left w-[15.8rem] lg:w-56 text-sm lg:text-xs'>
                            Akio, where innovation meets hydration. We believe in redefining how you experience hydration, offering a range of thoughtfully designed bottles catering to your lifestyle.
                        </p>
                        <div className='lg:hidden'>
                            <div className='w-[17rem] h-40 bg-[url(/assets/akio/10.jpg)] rounded-small bg-cover bg-center'></div>
                        </div>
                        <ButtonOutline style={'bg-cream text-charcoal border-none w-36 z-30'} href='https://interior-ds.vercel.app/' />
                    </div>

                </div>

                <div className='content absolute flex flex-col justify-start items-center h-full w-full top-0 left-0 mt-10 gap-y-20 lg:gap-y-8'>
                    <div className=''>
                        <h1 className='text-3xl lg:text-4xl font-soligant'>Akio Ecommerce</h1>
                        <div className='mt-4 flex justify-center items-center gap-x-5 font-soligant'>
                            <h4>2024</h4>
                            <div className='bg-cream h-2 w-2 rounded-full'></div>
                            <h4 className='text-whipped-cream'>Catalog 04</h4>
                        </div>
                    </div>

                    <div className='w-80 h-80 lg:min-w-[22rem] lg:max-w-[22rem] lg:min-h-[22rem] lg:max-h-[22rem] flex justify-center items-center bg-[#F0A645] rounded-full'>
                        <Image className='w-24 lg:w-28' src={'/assets/akio/akio.png'} width={800} height={800} quality={100} priority loading='eager' alt='Interior chair product' />
                    </div>

                </div> 
            </header>

            <div className='w-full text-white px-4 lg:px-10 pt-10 lg:pt-7 pb-20'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='hidden lg:flex font-soligant text-6xl'>Catalog 04</h1>
                    <div className='w-full lg:w-fit flex flex-col items-center lg:items-start gap-y-4'>
                        <div className='flex justify-between w-full lg:w-fit'>
                            <h2 className='text-2xl lg:text-4xl font-soligant'>About</h2>
                            <h2 className='lg:hidden text-2xl lg:text-4xl font-soligant'>Catalog 04</h2>
                        </div>
                        <p className='text-center lg:text-left text-xs w-64 mt-6 lg:mt-0'>
                            Crafted with precision and passion, each bottle from Akio is a testament to our unwavering commitment to quality. We believe that every detail matters, from the design aesthetics to the durability of the materials.
                        </p>
                    </div>
                </div>

                <div className='w-full flex justify-center lg:px-8 mt-12 lg:mt-5'>
                    <Image className='w-full lg:w-[40rem] rounded-small overflow-hidden' src={'/assets/akio/6.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior home page' />
                </div>

                <div className='w-full grid grid-rows-4 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-y-10 mt-12 lg:mt-48 px-4 lg:px-0'>
                    <Image className='w-96 order-1 lg:translate-x-5 lg:-translate-y-16' src={'/assets/akio/7.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 1' />
                    <Image className='w-96 order-2 lg:-translate-x-10' src={'/assets/akio/8.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                    <Image className='w-96 order-4 lg:order-3 lg:-translate-x-12 lg:-translate-y-16' src={'/assets/akio/9.png'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                    <Image className='w-96 order-3 lg:order-4' src={'/assets/akio/10.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                </div>
            </div>

            <div className='w-full bg-[#D8E0E2] flex flex-col items-center py-20 gap-y-12'>

                <div className='flex flex-col justify-center items-center gap-y-6'>
                    <h1 className='text-charcoal font-soligant text-2xl lg:text-3xl'>Website Description</h1>
                    <p className='text-charcoal text-xs lg:text-sm w-60 lg:w-[32.5rem] text-center'>
                        Akio is a solution for your hydration needs. From smart features that monitor your water intake to sleek, space-saving designs, our bottles are designed to enhance your daily routine.
                    </p>
                    <Link href='https://akio-ds.vercel.app/' className='py-2 px-14 rounded-small text-sm bg-cream'>
                        Visit Site
                    </Link>
                </div>

                <div className='w-full flex flex-col gap-y-10 px-2 lg:px-4'>
                    <div className='hidden lg:flex justify-between items-center'>
                        <h1 className='text-4xl text-charcoal font-light'>Information</h1>
                        <Link href='https://akio-ds.vercel.app/' className='py-2 px-14 rounded-small text-sm bg-cream'>
                            Visit Site
                        </Link>
                    </div>

                    <div className='lg:h-[35rem] flex flex-col lg:flex-row gap-x-5 w-full gap-y-10 lg:gap-y-0'>
                        <div className='w-full h-72 lg:h-full rounded-small bg-[url(/assets/akio/quokkabottles-Cs3X40zb4kQ-unsplash.jpg)] bg-cover bg-center'>
                            <h4 className='lg:hidden text-charcoal text-3xl mt-7 ml-5'>Akio</h4>
                        </div>
                        <div className='w-full flex flex-col gap-y-10 lg:gap-y-5 h-full bg-[#3F646B] rounded-small py-12 lg:pt-4 px-4 lg:px-5 lg:pb-3'>
                            <div className='w-full h-72 flex justify-center items-center overflow-hidden bg-seashell-whisper rounded-large lg:hidden text-charcoal relative'>
                                <div className='absolute top-0 left-0 flex flex-col justify-between items-center rounded-large h-full w-full py-6'>
                                    <p className=''>Product</p>
                                    <p className=''>Bottle</p>
                                </div>
                                <Image className='w-16 lg:w-36' src={'/assets/akio/akio.png'} width={400} height={400} quality={100} priority loading='eager' alt='Akio floral brown bottle product' />
                            </div>

                            <div className='flex gap-x-2 lg:gap-x-4 w-full h-52 lg:h-full'>

                                <div className='bg-[#17586B] w-full h-full rounded-large text-white flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Color Pallete</p>
                                    <h4 className='text-3xl'>Aa</h4>
                                    <div className='w-full flex justify-between items-center text-sm font-light'>
                                        <p>Hex</p>
                                        <p>#17586B</p>
                                    </div>
                                </div>

                                <div className='bg-[#EAEAEA] w-full h-full rounded-large text-charcoal flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Color Pallete</p>
                                    <h4 className='text-3xl'>Aa</h4>
                                    <div className='w-full flex justify-between items-center text-sm font-light'>
                                        <p>Hex</p>
                                        <p>#EAEAEA</p>
                                    </div>
                                </div>

                                <div className='bg-seashell-whisper w-full h-full rounded-large text-charcoal hidden lg:flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Product</p>
                                    <Image className='w-14' src={'/assets/akio/akio.png'} width={400} height={400} quality={100} priority loading='eager' alt='Interior chair product' />
                                    <p className='text-sm font-light'>Bottle</p>
                                </div>

                            </div>

                            <div className='bg-[#A29050] hidden lg:flex flex-col justify-between rounded-small w-full h-full px-5 pt-5 pb-4'>
                                <p className='text-sm text-white'>Technology</p>
                                <div className='text-white flex px-4 justify-between text-center'>
                                    <div className='space-y-1'>
                                        <h3 className='text-4xl'>Next.js</h3>
                                        <p className='text-sm'>Front</p>
                                    </div>
                                    <div className='space-y-1'>
                                        <h3 className='text-4xl'>Tailwind</h3>
                                        <p className='text-sm'>Styling</p>
                                    </div>
                                    <div className='space-y-1'>
                                        <h3 className='text-4xl'>Vercel</h3>
                                        <p className='text-sm'>Deploy</p>
                                    </div>
                                </div>

                                <div className='w-full flex flex-col justify-center items-center bg-cream rounded-large font-light py-3 gap-y-4'>
                                    <p>HIGHLIGHT</p>
                                    <ul className='flex gap-x-10 text-sm'>
                                        <li>Ecommerce</li>
                                        <li>Photography</li>
                                        <li>Products</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center lg:justify-between items-center text-charcoal px-4'>
                    <ButtonOutline href='https://akio-ds.vercel.app/' color='black' />
                    <p className='hidden lg:block font-soligant text-lg'>Catalog 04</p>
                </div>

            </div>

            <footer className='lg:min-h-screen w-full flex flex-col gap-y-4 lg:gap-y-0 bg-[#3F646B] pt-8'>
                <ul className='w-full flex justify-between items-start font-soligant text-lg text-white px-4 lg:px-6'>
                    <li>Catalog 03</li>
                    <li>Adventure<br />Alcove</li>
                    <li className='hidden lg:flex'>Catalog 03</li>
                </ul>

                <Link href='#' className='bg-cream w-fit rounded-full py-2 px-10 text-charcoal text-sm self-end lg:hidden mr-4 translate-y-8'>
                    Contact Us
                </Link>

                <div className='text-white flex justify-between items-end px-4 lg:px-10 lg:mt-24'>
                    <h1 className='font-soligant text-4xl lg:text-9xl -translate-y-10 lg:-translate-y-24'>Megazine</h1>
                    <p className='font-soligant text-lg hidden lg:flex lg:-translate-x-20'>New Catalog</p>

                    <div className='bg-seashell-whisper flex justify-center items-center rounded-large w-28 h-32 lg:w-40 lg:h-48 relative translate-y-24 lg:translate-y-28 z-10'>
                        <div className='absolute text-sm top-0 left-0 h-full w-full flex flex-col justify-between items-center py-2 lg:py-4 text-charcoal'>
                            <p>Product</p>
                            <p>Megazine</p>
                        </div>
                        <Image className='w-[5rem] lg:w-36' src={'/assets/akio/travel-agent-world-tourism-organization-stock-photography-tourist-a30b2c94a5d082eccd6a845f3d68d7e9.png'} height={400} width={400} quality={100} priority loading='eager' alt='Akio bottle product' />
                    </div>
                </div>

                <div className='h-72 lg:h-[30rem] w-full bg-[url(/assets/akio/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash.jpg)] bg-cover bg-center mt-3 relative'>
                    <Link href={'/'} className='absolute bottom-20 right-40 w-44 h-11 hidden lg:flex rounded-full gap-x-2 justify-start items-center bg-cream px-2'>
                        <div className='bg-coppertone h-8 w-8 flex justify-center items-center text-white rounded-full'>
                            <PiHouseFill />
                        </div>
                        <div className='text-xs flex flex-col justify-start items-start h-8'>
                            <p>Back To Home</p>
                            <p className='font-light'>EQUINX</p>
                        </div>
                    </Link>

                    <PageIdRounded text='/03' isDefault={false} />
                </div>
            </footer>

        </main>
    )
}

export default AkioDetail