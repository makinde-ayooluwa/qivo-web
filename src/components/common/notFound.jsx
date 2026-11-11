import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className=''>
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <div className='text-center text-3xl'>
                <h1>Oops...</h1>
            </div>
            <div className='p-5 text-center text-[28px] font-light'>
                <h1>The page you are looking for does not exists, moved to another address or under construction</h1>
            </div>
            <div className='justify-self-center'>
                <Link to={"/"} className='p-3 border rounded border-transparent bg-purple-700'>
                    Go to home
                </Link>
            </div>
        </div>
    )
}
