import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOutLinks(props) {
    return (
        <ul className="tabs tabs-transparent">
            <li className='tab'><NavLink to="/">Signup</NavLink></li>
            <li className='tab'><NavLink to="/">Login</NavLink></li>
        </ul>
    )
}