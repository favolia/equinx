import React from 'react'

const ButtonListHorizontal = ({ catalog = '01' }) => {
    return (
        <div className='flex w-full lg:w-fit flex-col items-center lg:items-start gap-y-8 lg:gap-y-4'>
            <div className='flex w-full justify-between'>
                <h2 className='font-soligant text-3xl lg:text-5xl text-white'>Services</h2>
                <h2 className='font-soligant text-3xl lg:text-5xl text-white lg:hidden'>Catalog {catalog}</h2>
            </div>
            <div className='flex justify-center items-center text-xs gap-x-3'>
                <button className='px-5 py-1 lg:py-2 lg:px-6 border border-white rounded-full'>
                    Concept
                </button>
                <button className='px-5 py-1 lg:py-2 lg:px-6 border border-white rounded-full'>
                    Design
                </button>
                <button className='px-5 py-1 lg:py-2 lg:px-6 border border-white rounded-full'>
                    Development
                </button>
            </div>
        </div>
    )
}

export default ButtonListHorizontal