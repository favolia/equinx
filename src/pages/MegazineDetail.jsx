import NavbarDetail from '@/components/NavbarDetail'
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import ButtonOutline from '@/components/ui/ButtonOutline';
import { PiHouseFill } from "react-icons/pi";
import PageIdRounded from '@/components/ui/PageIdRounded';

const RestaurantDetail = () => {
    return (
        <main className='w-full bg-[#465367]'>
            <div className='px-4 py-5 lg:py-6'>
                <NavbarDetail />
                <NavbarMobile style={'text-white'} />
            </div>

            <header className='w-full h-[165vh] lg:h-[200vh] flex items-end relative text-white'>
                <div className='bg-[#C0CDE2] flex justify-center lg:justify-between items-end pb-10 lg:pb-20 w-full h-[110vh] lg:h-screen px-6'>
                    <div className='-translate-y-12 text-charcoal hidden lg:flex flex-col gap-y-4'>
                        <h1 className='text-6xl font-soligant'>Megazine</h1>
                        <div className='w-[17rem] h-36 bg-[url(/assets/megazine/sebin-thomas-OdBFUurPHjo-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                    </div>

                    <div className='flex flex-col items-center justify-center lg:justify-start lg:items-end gap-y-10 lg:gap-y-10 text-charcoal'>
                        <h1 className='text-3xl lg:text-6xl font-soligant'>Catalog 03</h1>
                        <p className='text-center lg:text-left w-72 lg:w-64 text-sm'>
                            Magazine is a trusted source of information, a platform for meaningful conversations, and a source of inspiration for our readers.
                        </p>
                        <div className='lg:hidden'>
                            <div className='w-[17rem] h-40 bg-[url(/assets/megazine/sebin-thomas-OdBFUurPHjo-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                        </div>
                        <ButtonOutline style={'bg-cream text-charcoal border-none w-36 z-30'} href='https://interior-ds.vercel.app/' />
                    </div>

                </div>

                <div className='content absolute flex flex-col justify-start items-center h-full w-full top-0 left-0 mt-10 lg:mt-36 gap-y-20 lg:gap-y-8'>
                    <div className='text-white'>
                        <h1 className='text-3xl lg:text-8xl text-center font-soligant'>Megazine</h1>
                        <div className='mt-4 flex justify-center items-center gap-x-5 font-soligant'>
                            <h4>2024</h4>
                            <div className='bg-cream h-2 w-2 rounded-full'></div>
                            <h4 className='text-whipped-cream'>Catalog 03</h4>
                        </div>
                    </div>

                    <div className='w-80 h-80 lg:min-w-[38rem] lg:max-w-[38rem] lg:min-h-[38rem] lg:max-h-[38rem] flex justify-center items-center bg-[#D8DFDC] rounded-full'>
                        <Image className='w-full lg:w-[40rem]' src={'/assets/megazine/travel-agent-world-tourism-organization-stock-photography-tourist-a30b2c94a5d082eccd6a845f3d68d7e9.png'} width={800} height={800} quality={100} priority loading='eager' alt='Interior chair product' />
                    </div>

                </div>
            </header>

            <div className='w-full text-white px-4 lg:px-10 pt-10 pb-20'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='hidden lg:flex font-soligant text-8xl'>Catalog 03</h1>
                    <div className='w-full lg:w-fit flex flex-col items-center lg:items-start gap-y-4'>
                        <div className='flex justify-between w-full lg:w-fit'>
                            <h2 className='text-2xl lg:text-4xl font-soligant'>About</h2>
                            <h2 className='lg:hidden text-2xl lg:text-4xl font-soligant'>Catalog 03</h2>
                        </div>
                        <p className='text-center lg:text-left text-xs w-64 mt-6 lg:mt-0'>
                            Magazine is built on a foundation of core values that guide our every decision. We value integrity, authenticity, and a commitment to delivering content that is both informative and entertaining.
                        </p>
                    </div>
                </div>

                <div className='w-full lg:px-8 mt-12 lg:mt-20'>
                    <Image className='w-full rounded-small overflow-hidden' src={'/assets/megazine/11.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior home page' />
                </div>

                <div className='w-full grid grid-rows-4 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 place-items-center gap-y-5 lg:gap-y-10 mt-12 lg:mt-48 px-4 lg:px-0'>
                    <Image className='w-96 order-1 lg:translate-x-5 lg:-translate-y-16' src={'/assets/megazine/12.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 1' />
                    <Image className='w-96 order-2 lg:-translate-x-10' src={'/assets/megazine/13.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                    <Image className='w-96 order-4 lg:order-3 lg:-translate-x-12 lg:-translate-y-16' src={'/assets/megazine/14.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                    <Image className='w-96 order-3 lg:order-4' src={'/assets/megazine/15.jpg'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                </div>
            </div>

            <div className='w-full bg-[#C0CDE2] flex flex-col items-center py-20 gap-y-12'>

                <div className='flex flex-col justify-center items-center gap-y-6'>
                    <h1 className='text-charcoal font-soligant text-2xl lg:text-3xl'>Website Description</h1>
                    <p className='text-charcoal text-xs lg:text-sm w-60 lg:w-[32.5rem] text-center'>
                        Magazine, where inspiration meets information. We are a dynamic and forward-thinking online magazine committed to delivering captivating content that spans a wide range of topics.
                    </p>
                    <Link href='https://interior-ds.vercel.app/' className='py-2 px-14 rounded-small text-sm bg-cream'>
                        Visit Site
                    </Link>
                </div>

                <div className='w-full flex flex-col gap-y-10 px-2 lg:px-4'>
                    <div className='hidden lg:flex justify-between items-center'>
                        <h1 className='text-4xl text-charcoal font-light'>Information</h1>
                        <Link href='https://interior-ds.vercel.app/' className='py-2 px-14 rounded-small text-sm bg-cream'>
                            Visit Site
                        </Link>
                    </div>

                    <div className='lg:h-[35rem] flex flex-col lg:flex-row gap-x-5 w-full gap-y-10 lg:gap-y-0'>
                        <div className='w-full h-72 lg:h-full rounded-small bg-[url(/assets/megazine/willian-justen-de-vasconcellos-T_Qe4QlMIvQ-unsplash.jpg)] bg-cover bg-center'>
                            <h4 className='lg:hidden text-charcoal text-3xl mt-7 ml-5'>Megazine</h4>
                        </div>
                        <div className='w-full flex flex-col gap-y-10 lg:gap-y-5 h-full bg-[#3F646B] rounded-small py-12 lg:pt-4 px-4 lg:px-5 lg:pb-3'>
                            <div className='w-full h-72 flex justify-center items-center overflow-hidden bg-seashell-whisper rounded-large lg:hidden text-charcoal relative'>
                                <div className='absolute top-0 left-0 flex flex-col justify-between items-center rounded-large h-full w-full py-6'>
                                    <p className=''>Product</p>
                                    <p className=''>Megazine</p>
                                </div>
                                <Image className='w-52' src={'/assets/megazine/travel-agent-world-tourism-organization-stock-photography-tourist-a30b2c94a5d082eccd6a845f3d68d7e9.png'} width={400} height={400} quality={100} priority loading='eager' alt='Ceramics floral vas product' />
                            </div>

                            <div className='flex gap-x-2 lg:gap-x-4 w-full h-52 lg:h-full'>

                                <div className='bg-[#67A2B2] w-full h-full rounded-large text-white flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Color Pallete</p>
                                    <h4 className='text-3xl'>Aa</h4>
                                    <div className='w-full flex justify-between items-center text-sm font-light'>
                                        <p>Hex</p>
                                        <p>#67A2B2</p>
                                    </div>
                                </div>

                                <div className='bg-[#D8DFDC] w-full h-full rounded-large text-charcoal flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Color Pallete</p>
                                    <h4 className='text-3xl'>Aa</h4>
                                    <div className='w-full flex justify-between items-center text-sm font-light'>
                                        <p>Hex</p>
                                        <p>#D8DFDC</p>
                                    </div>
                                </div>

                                <div className='bg-seashell-whisper w-full h-full rounded-large text-charcoal hidden lg:flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Product</p>
                                    <Image className='w-40' src={'/assets/megazine/travel-agent-world-tourism-organization-stock-photography-tourist-a30b2c94a5d082eccd6a845f3d68d7e9.png'} width={400} height={400} quality={100} priority loading='eager' alt='Interior chair product' />
                                    <p className='text-sm font-light'>Megazine</p>
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
                    <ButtonOutline href='https://interior-ds.vercel.app/' color='black' />
                    <p className='hidden lg:block font-soligant text-lg'>Catalog 03</p>
                </div>

            </div>

            <footer className='lg:min-h-screen w-full flex flex-col gap-y-4 lg:gap-y-0 bg-[#465367] pt-8'>
                <ul className='w-full flex justify-between items-start font-soligant text-lg text-white px-4 lg:px-6'>
                    <li>Catalog 02</li>
                    <li>Heritage Bites</li>
                    <li className='hidden lg:flex'>Catalog 02</li>
                </ul>

                <Link href='#' className='bg-cream w-fit rounded-full py-2 px-10 text-charcoal text-sm self-end lg:hidden mr-4 translate-y-8'>
                    Contact Us
                </Link>

                <div className='text-white flex justify-between items-end px-4 lg:px-10 lg:mt-24'>
                    <h1 className='font-soligant text-4xl lg:text-9xl -translate-y-10 lg:-translate-y-24'>Restaurant</h1>
                    <p className='font-soligant text-lg hidden lg:flex lg:-translate-x-20'>New Catalog</p>

                    <div className='bg-seashell-whisper flex justify-center items-center rounded-large w-28 h-32 lg:w-40 lg:h-48 relative translate-y-24 lg:translate-y-28 z-10'>
                        <div className='absolute text-sm top-0 left-0 h-full w-full flex flex-col justify-between items-center py-2 lg:py-4 text-charcoal'>
                            <p>Product</p>
                            <p>Restaurant</p>
                        </div>
                        <Image className='w-11 lg:w-16' src={'/assets/restaurant/fast-food-organic-food-vegetarian-cuisine-junk-food-junk-food-ad53305b4fb8bd80b075c0170edd7380.png'} height={400} width={400} quality={100} priority loading='eager' alt='Akio bottle product' />
                    </div>
                </div>

                <div className='h-72 lg:h-[30rem] w-full bg-[url(/assets/megazine/maryam-sicard-MHl9tSeUkl4-unsplash.jpg)] bg-cover bg-center mt-3 relative'>
                    <Link href={'/'} className='absolute bottom-20 right-40 w-44 h-11 hidden lg:flex rounded-full gap-x-2 justify-start items-center bg-cream px-2'>
                        <div className='bg-coppertone h-8 w-8 flex justify-center items-center text-white rounded-full'>
                            <PiHouseFill />
                        </div>
                        <div className='text-xs flex flex-col justify-start items-start h-8'>
                            <p>Back To Home</p>
                            <p className='font-light'>EQUINX</p>
                        </div>
                    </Link>

                    <PageIdRounded isDefault={false} text='/04' />
                </div>
            </footer>

        </main>
    )
}

export default RestaurantDetail