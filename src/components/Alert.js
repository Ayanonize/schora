import React from 'react'

export default function Alert(props) {
    return (
        <div className={`${props.color} p-3`}>
            <h1 className="text-white text-3xl"><strong>{props.type}</strong> <span className='text-2xl'>{props.message}</span></h1>
        </div>
    )
}
