import React from 'react'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignOutLink'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className='nav-extended blue-grey darken-3'>
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/" style={{position: 'static'}}>Bookmarks App</Link>
                
            </div>
            <div className="nav-content">
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}