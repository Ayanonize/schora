import React from 'react'
import Questions from '../components/Questions'
import axios from 'axios'

export default function Home() {

    axios.get('http://localhost:4001/Schora/GetPost.php').then((res) => {
        console.log(res.data);
    })

    return (
        <>
            <h1 className='text-center text-7xl font-bold text-white mt-10'>Browse Some <span className='text-blue-400'> Top</span> Questions</h1>

            <Questions />

        </>
    )
}
