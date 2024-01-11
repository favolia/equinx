'use client';
import React, { useEffect } from 'react'

const RemoveRightClick = () => {
    useEffect(() => {
        document.addEventListener('contextmenu', e => e.preventDefault())
        document.removeEventListener('contextmenu', e => e.preventDefault())
    }, []);

    return (
        <span className='hidden'></span>
    )
}

export default RemoveRightClick