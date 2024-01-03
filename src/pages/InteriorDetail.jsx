import NavbarDetail from '@/components/NavbarDetail'
import NavbarMobile from '@/components/NavbarMobile'
import React from 'react'
import Image from "next/image";
import ButtonOutline from '@/components/ui/ButtonOutline';

const InteriorDetail = () => {
    return (
        <main className='w-full bg-coppertone'>
            <div className='px-4 py-5 lg:py-6'>
                <NavbarDetail />
                <NavbarMobile style={'text-white'} />
            </div>

            <header className='w-full h-[165vh] lg:h-[200vh] flex items-end relative text-white'>
                <div className='bg-desert-rose flex justify-center lg:justify-between items-end pb-10 lg:pb-20 w-full h-[110vh] lg:h-screen px-6'>
                    <div className='-translate-y-12 text-charcoal hidden lg:flex flex-col gap-y-4'>
                        <h1 className='text-6xl font-soligant'>Ceramics</h1>
                        <div className='w-[17rem] h-36 bg-[url(/assets/images/katelyn-perry-8gvg4nouS3k-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                    </div>

                    <div className='flex flex-col items-center justify-center lg:justify-start lg:items-end gap-y-10 lg:gap-y-20 text-charcoal'>
                        <h1 className='text-3xl lg:text-6xl font-soligant'>Catalog 01</h1>
                        <p className='text-center lg:text-left w-[15.8rem] lg:w-52 text-sm'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        </p>
                        <div className='lg:hidden'>
                            <div className='w-[17rem] h-40 bg-[url(/assets/images/katelyn-perry-8gvg4nouS3k-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                        </div>
                        <ButtonOutline style={'bg-cream text-charcoal border-none w-36 '} />
                    </div>

                </div>

                <div className='content absolute flex flex-col justify-start items-center h-full w-full top-0 left-0 mt-10 lg:mt-36 gap-y-20 lg:gap-y-8'>
                    <div className=''>
                        <h1 className='text-3xl lg:text-8xl font-soligant'>Ceramics Ecommerce</h1>
                        <div className='mt-4 flex justify-center items-center gap-x-5 font-soligant'>
                            <h4>2024</h4>
                            <div className='bg-cream h-2 w-2 rounded-full'></div>
                            <h4 className='text-whipped-cream'>Catalog 01</h4>
                        </div>
                    </div>

                    <div className='w-80 h-80 lg:min-w-[38rem] lg:max-w-[38rem] lg:min-h-[38rem] lg:max-h-[38rem] flex justify-center items-center bg-cream rounded-full'>
                        <Image className='w-full' src={'/assets/detail-interior/flower-bouquet-floral-design-magnolia-brandy-floral-art-8dc0be0f81838b9fc283ffecb615b110.png'} width={800} height={800} quality={100} priority loading='eager' alt='Ceramics vas product' />
                    </div>

                </div>
            </header>

            <div className=''>ldnsdksd</div>
        </main>
    )
}

export default InteriorDetail