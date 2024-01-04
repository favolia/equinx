import { cn } from '@/lib/utils'
import React from 'react'

const PageIdRounded = ({ text = '/01', style, isDefault = true }) => {

    if (isDefault) {
        return (
            <div className={cn('flex justify-center items-center text-white rounded-full h-16 w-16 backdrop-blur-2xl bg-white/15 text-2xl', style)}>
                {text}
            </div>
        )
    } else {
        return (
            <div className={cn('hidden absolute top-28 left-56 lg:flex justify-center items-center text-white rounded-full h-16 w-16 backdrop-blur-2xl bg-white/15 text-2xl', style)}>
                {text}
            </div>
        )
    }

}

export default PageIdRounded