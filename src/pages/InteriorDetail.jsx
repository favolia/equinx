'use client';
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import ButtonOutline from '@/components/ui/ButtonOutline';
import { PiHouseFill } from "react-icons/pi";
import Navbar from '@/components/Navbar';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import ButtonListHorizontal from '@/components/ButtonListHorizontal';
import PageIdRounded from '@/components/ui/PageIdRounded';
import BackHome from '@/components/ui/BackHome';

const InteriorDetail = () => {
    const scroll = useScrollPosition()
    return (
        <main className='w-full bg-chocolate-milk'>
            <div className='hidden lg:block py-4'>
                <Navbar background={`bg-[#C7B19C] text-charcoal`} iconColor={'text-white'} paddingWhenStatic={'py-4'} padding={`px-3 lg:px-4`} />
            </div>
            <NavbarMobile withMenu style={'text-white backdrop-blur-2xl rounded-small py-2 px-5'} padding='px-3 py-2' />

            <header className='w-full h-[165vh] lg:h-[200vh] flex items-end relative text-white'>
                <div className='bg-[#C7B19C] flex justify-center lg:justify-between items-end pb-10 lg:pb-20 w-full h-[110vh] lg:h-screen px-6 lg:pl-6 lg:pr-16'>
                    <div className='-translate-y-12 text-charcoal hidden lg:flex flex-col gap-y-4 z-10'>
                        <h1 className='text-6xl font-soligant'>Interior</h1>
                        <div className='w-[17rem] h-36 bg-[url(/assets/images/katelyn-perry-8gvg4nouS3k-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                    </div>

                    <div className='flex flex-col items-center justify-center lg:justify-start lg:items-start gap-y-10 lg:gap-y-8 text-charcoal z-10'>
                        <h1 className='text-3xl lg:text-6xl font-soligant'>About</h1>
                        <p className='text-center lg:text-left w-80 lg:w-64 text-sm'>
                            Interior is a architecture design service, specializing in innovative interior, exterior, and furniture designs. and bring precision and creativity to enhance every property project.
                        </p>
                        <div className='lg:hidden'>
                            <div className='w-[17rem] h-40 bg-[url(/assets/images/katelyn-perry-8gvg4nouS3k-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                        </div>
                        <ButtonOutline style={'bg-cream text-charcoal border-none w-36 z-30'} href='https://interior-ds.vercel.app/' />
                    </div>

                </div>

                <div className='content absolute flex flex-col justify-start items-center h-full w-full top-0 left-0 mt-10 lg:mt-20 gap-y-20 lg:gap-y-8'>
                    <div className='text-white'>
                        <h1 className='text-3xl lg:text-8xl text-center font-soligant'>Interior Website</h1>
                        <div className='mt-4 flex justify-center items-center gap-x-5 font-soligant'>
                            <h4>2024</h4>
                            <div className='bg-cream h-2 w-2 rounded-full'></div>
                            <h4 className='text-whipped-cream'>Catalog 03</h4>
                        </div>
                    </div>

                    <div className='w-80 h-80 lg:min-w-[43rem] lg:max-w-[43rem] lg:min-h-[43rem] lg:max-h-[43rem] flex justify-center items-center bg-[#734F2D] rounded-full'>
                        <Image className='w-full' src={'/assets/detail-interior/table-couch-chair-furniture-ottoman-orange-sofa-b51551a372295ae2b1e763c2fea1ab05.png'} width={800} height={800} quality={100} priority loading='eager' alt='Interior chair product' />
                    </div>

                </div>
            </header>

            <div className='w-full text-white px-4 lg:pl-10 lg:pr-16 pt-16 lg:pt-10 pb-20'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='hidden lg:flex font-soligant text-8xl'>Catalog 03</h1>
                    <div className='w-full lg:w-fit flex flex-col items-center lg:items-start gap-y-4'>
                        <ButtonListHorizontal />
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center gap-y-4 lg:gap-y-7 lg:px-8 mt-12 lg:mt-28'>
                    <Image className='w-full lg:w-[55rem]' src={'/assets/images/Firefox_Screenshot_2023-12-28T14-49-20.970Z.png'} width={800} height={800} priority quality={100} loading='eager' alt='interior home page' />
                    <div className='lg:w-full flex flex-col justify-center items-center px-3 lg:px-0 mt-5 lg:mt-0 gap-y-4 lg:gap-y-7'>
                        <Image className='w-full lg:w-[55rem]' src={'/assets/images/Firefox_Screenshot_2023-12-28T14-58-37.795Z.png'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 1' />
                        <Image className='w-full lg:w-[55rem]' src={'/assets/images/Firefox_Screenshot_2023-12-28T15-03-51.987Z.png'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                        <Image className='w-full lg:w-[55rem]' src={'/assets/images/Firefox_Screenshot_2023-12-28T15-02-24.499Z.png'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                        <Image className='w-full lg:w-[55rem]' src={'/assets/images/Firefox_Screenshot_2023-12-28T15-11-29.450Z.png'} width={800} height={800} priority quality={100} loading='eager' alt='interior section 2' />
                    </div>
                </div>
            </div>

            <div className='w-full bg-creamy-custard flex flex-col items-center py-20 gap-y-12'>

                <div className='flex flex-col justify-center items-center gap-y-6'>
                    <h1 className='text-charcoal font-soligant text-2xl lg:text-3xl'>Website Challange</h1>
                    <p className='text-charcoal text-xs lg:text-sm w-[14rem] lg:w-[33rem] text-center'>
                        The challenge lay in creating a property website showcasing interior and exterior designs, navigating the task of capturing the essence of building projects. Balancing the visual appeal and functionality demanded meticulous attention, aiming to present a comprehensive and engaging platform for our architectural showcases
                    </p>
                    <Link href='https://interior-ds.vercel.app/' className='py-2 px-14 rounded-small text-sm bg-cream'>
                        Visit Site
                    </Link>
                </div>

                <div className='w-full flex flex-col gap-y-10 px-2 lg:px-4'>
                    <div className='hidden lg:flex justify-between items-center'>
                        <h1 className='text-4xl text-charcoal font-light'>Information</h1>
                        <h1 className='text-4xl text-charcoal'>Interior</h1>
                    </div>

                    <div className='lg:h-[35rem] flex flex-col lg:flex-row gap-x-5 w-full gap-y-10 lg:gap-y-0'>
                        <div className='w-full h-72 lg:h-full rounded-small bg-[url(/assets/images/collov-home-design-H-1j_s0dhCw-unsplash.jpg)] bg-cover bg-center'>
                            <h4 className='lg:hidden text-white text-3xl mt-7 ml-5'>Ceramics</h4>
                        </div>
                        <div className='w-full flex flex-col gap-y-10 lg:gap-y-5 h-full bg-coffe rounded-small py-12 lg:pt-4 px-4 lg:px-5 lg:pb-3'>
                            <div className='w-full h-72 flex justify-center items-center overflow-hidden bg-seashell-whisper rounded-large lg:hidden text-charcoal relative'>
                                <div className='absolute top-0 left-0 flex flex-col justify-between items-center rounded-large h-full w-full py-6'>
                                    <p className=''>Product</p>
                                    <p className=''>Vase</p>
                                </div>
                                <Image className='w-36' src={'/assets/images/floral-design-vase-flower-bouquet-glass-white-soft-mounted-decorative-glass-vase-426dd00beafd5fc7a6d031271466211f.png'} width={400} height={400} quality={100} priority loading='eager' alt='Ceramics floral vas product' />
                            </div>

                            <div className='flex gap-x-2 lg:gap-x-4 w-full h-52 lg:h-full'>

                                <div className='bg-cream w-full h-full rounded-large text-charcoal flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Color Pallete</p>
                                    <h4 className='text-3xl'>Aa</h4>
                                    <div className='w-full flex justify-between items-center text-sm font-light'>
                                        <p>Hex</p>
                                        <p>#F5EFE9</p>
                                    </div>
                                </div>

                                <div className='bg-goldenrod w-full h-full rounded-large text-white flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Color Pallete</p>
                                    <h4 className='text-3xl'>Aa</h4>
                                    <div className='w-full flex justify-between items-center text-sm font-light'>
                                        <p>Hex</p>
                                        <p>#D7A218</p>
                                    </div>
                                </div>

                                <div className='bg-seashell-whisper w-full h-full rounded-large text-charcoal hidden lg:flex flex-col justify-between items-center p-4'>
                                    <p className='text-sm font-light'>Product</p>
                                    <Image src={'/assets/detail-interior/table-couch-chair-furniture-ottoman-orange-sofa-b51551a372295ae2b1e763c2fea1ab05.png'} width={400} height={400} quality={100} priority loading='eager' alt='Interior chair product' />
                                    <p className='text-sm font-light'>Chair</p>
                                </div>

                            </div>

                            <div className='bg-camel hidden lg:flex flex-col justify-between rounded-small w-full h-full px-5 pt-5 pb-4'>
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

            <footer className='lg:min-h-screen w-full flex flex-col gap-y-4 lg:gap-y-0 bg-chocolate-milk pt-8'>
                <ul className='w-full flex lg:flex-row-reverse justify-between items-start font-soligant text-lg text-white px-4 lg:px-6'>
                    <li>Catalog 01</li>
                    <li>Next Catalogue</li>
                </ul>

                <div className='text-white flex justify-between items-end px-4 lg:px-10 lg:mt-24'>
                    <h1 className='font-soligant text-4xl lg:text-9xl -translate-y-10 lg:-translate-y-24'>Akio</h1>
                    <p className='font-soligant text-lg hidden lg:flex'>Next Catalogue</p>

                    <div className='bg-seashell-whisper flex justify-center items-center rounded-large w-28 h-32 lg:w-40 lg:h-48 relative translate-y-24 lg:translate-y-28 z-10'>
                        <div className='absolute text-sm top-0 left-0 h-full w-full flex flex-col justify-between items-center py-2 lg:py-4 text-charcoal'>
                            <p>Product</p>
                            <p>Akio Bottle</p>
                        </div>
                        <Image className='w-6 lg:w-10' src={'/assets/images/3.png'} height={400} width={400} quality={100} priority loading='eager' alt='Akio bottle product' />
                    </div>
                </div>

                <Link href={'/akio-detail'} className='h-72 lg:h-[30rem] w-full bg-[url(/assets/images/Leonardo_Diffusion_XL_product_photograph_where_there_is_a_bott_0.jpeg)] bg-cover bg-center mt-3 relative'>
                    <div className='absolute bottom-20 right-20 lg:right-40'>
                        <BackHome />
                    </div>

                    <PageIdRounded isDefault={false} text='/01' />
                </Link>
            </footer>

        </main>
    )
}

export default InteriorDetail