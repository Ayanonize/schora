import React from 'react'


export default function Profile() {

    return (

        <>


            <div className='flex items-center justify-center min-h-screen'>
                <div className='w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl'>
                    <div className="rounded-t-lg" style={{
                        backgroundImage: "radial-gradient(transparent 28px,#ffffff 28px,#ffffff 32px,transparent 32px)", height: "150px", width: "100%", backgroundColor: "#00b5f7", backgroundSize: "53px 53px"
                    }}></div>
                    <div>
                        <div className="text-center" >
                            <span className="border-4 border-white rounded-full mx-auto inline-block">
                                <img className="rounded-full w-20 h-20" src="https://randomwordgenerator.com/img/picture-generator/51e6dc41434faa0df7c5d57bc32f3e7b1d3ac3e455517349762f72d794_640.jpg" alt="profile" />
                            </span>
                        </div>
                        <p className="text-center"><span className="font-bold">{JSON.parse(localStorage.getItem('UserData')).name}</span></p>
                        <p className="text-xs text-center mb-5">{JSON.parse(localStorage.getItem('UserData')).desc}</p>
                        <hr />
                        <div className="flex justify-between px-10 py-5">
                            <div className="text-center">
                                <p className="font-bold">100K</p>
                                <p className="text-xs">Followers</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold">903K</p>
                                <p className="text-xs">Likes</p>

                            </div>
                            <div className="text-center">
                                <p className="font-bold">104K</p>
                                <p className="text-xs">Photos</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}


