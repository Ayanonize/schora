import React from 'react'
import Replies from '../components/Replies'

export default function Detail() {
    return (
        <>

            <div className='bg-sky-500 p-5 rounded text-white my-5'>
                <h1 className="text-3xl">@Ayanonize</h1>
                <h1 className="text-6xl">this is a title</h1>
                <h1 className="text-5xl font-light">this is a desc</h1>
            </div>
            <hr />
            <div className='text-white  p-5'>
                <h1 className=' text-5xl font-extrabold m-5  text-center'>Replies</h1>
                <Replies />

            </div>
        </>
    )
}
