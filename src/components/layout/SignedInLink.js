import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

function SignedInLinks(props) {
    const { signOut, profile } = props
    const handleSignOut = () => signOut()

    return (
        <ul className="tabs tabs-transparent">
            <li className='tab'><NavLink to="/create">Create Post</NavLink></li>
            <li className='tab'>
                <NavLink to="/" onClick={handleSignOut}>Logout</NavLink>
            </li>
            <li className='tab'>
                <NavLink to="/profile" className="icon btn btn-floating orange lighten-2">
                    <span role='img' aria-label='profile icon'>👤</span>
                </NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(SignedInLinks)