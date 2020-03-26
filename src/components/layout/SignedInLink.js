import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInLinks(props) {
    return (
        <ul className="tabs tabs-transparent">
            <li className='tab'><NavLink to="/create">Create Post</NavLink></li>
            <li className='tab'><NavLink to="/">Logout</NavLink></li>
            <li className='tab'><NavLink to="/" className="icon btn btn-floating blue lighten-3">👤</NavLink></li>
        </ul>
    )
}