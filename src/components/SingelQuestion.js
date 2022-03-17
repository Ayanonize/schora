import React from 'react'
import { Link } from 'react-router-dom'

export default function SingelQuestion() {
    return (
        <Link to="/detail">
            <div className='bg-sky-500 p-4 rounded shadow-2xl m-5 hover:bg-sky-300'>
                <h1 className="text-xl text-white font-bold"><strong>@Aynonize</strong></h1>
                <h1 className="text-3xl text-white font-bold">this is a title</h1>
                <h1 className="text-2xl text-white font-normal">this is a desc</h1>
            </div>
        </Link>
    )
}
