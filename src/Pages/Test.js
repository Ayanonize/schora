import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Test() {
    const location = useLocation()

    return (

        // location.pathname is '/users/new'
        <span>Path is: {location.pathname}</span>
    )
}
