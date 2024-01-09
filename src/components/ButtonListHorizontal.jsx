import React from 'react'

const ButtonListHorizontal = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <h2 className='font-soligant text-5xl text-white'>Services</h2>
            <div className='flex justify-center items-center text-xs gap-x-3'>
                <button className='py-2 px-6 border border-white rounded-full'>
                    Concept
                </button>
                <button className='py-2 px-6 border border-white rounded-full'>
                    Design
                </button>
                <button className='py-2 px-6 border border-white rounded-full'>
                    Development
                </button>
            </div>
        </div>
    )
}

export default ButtonListHorizontal