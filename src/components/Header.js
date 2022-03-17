import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {

    return (
        <header className="text-gray-400 bg-schora body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Schora</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-white" to="/Home">Home</Link>
                    <Link className="mr-5 hover:text-white" to="/profile">Profile</Link>
                    <Link className="mr-5 hover:text-white" to="/post">Post</Link>
                    <Link className="mr-5 hover:text-white" to="/">Fourth Link</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onClick={() => { localStorage.clear() }} >{localStorage.getItem('UserData') ? JSON.parse(localStorage.getItem('UserData')).name : "name nahi hai!"}
                </button>
            </div>
        </header>
    )
}
