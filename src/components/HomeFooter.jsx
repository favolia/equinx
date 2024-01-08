import React from 'react'
import ButtonOutline from './ui/ButtonOutline'

const HomeFooter = () => {
    return (
        <footer className='w-full h-96 lg:h-screen flex flex-col justify-between items-center bg-camel text-charcoal px-4 lg:px-10 py-7 lg:py-10'>
            <div className='w-full relative'>
                <div className='w-full hidden lg:flex justify-between items-center'>
                    <h2 className='text-xl font-soligant'>Simple, yet impactful<br />design.</h2>
                    <h2 className='text-xl font-soligant'>visual brilliance</h2>
                </div>
                <div className='w-full flex justify-center items-center absolute left-0 top-0'>
                    <ButtonOutline color='black' href='/contact-us' style={'text-charcoal'} />
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <h1 className='text-4xl lg:text-[7rem] font-soligant flex justify-center items-center gap-x-5 lg:gap-x-[4.5rem]'>
                    CONTACT
                    <div className='h-9 w-14 lg:w-40 lg:h-24 bg-[url(/assets/images/no-revisions-Pu0sndkokuA-unsplash.jpg)] rounded-small bg-cover bg-center'></div>
                    US
                </h1>
            </div>

            <div className='w-full hidden lg:flex justify-between items-center'>
                <ButtonOutline text='Equinx000@gmail.com' color='black' style={'text-sm text-charcoal'} />
                <h2 className='text-xl font-soligant'>Carafting Memories</h2>
                <h2 className='text-xl font-soligant text-left'>Carving a Timeless<br />Legacy</h2>
            </div>

            <div className='w-full flex justify-between items-center lg:hidden font-soligant text-lg'>
                <p>@2024Equinx</p>
                <p>Crafting Memories</p>
            </div>
        </footer>
    )
}

export default HomeFooter