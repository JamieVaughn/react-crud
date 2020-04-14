import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {firebaseConnect} from 'react-redux-firebase'

function SignedInLinks(props) {
    const { signOut, profile, firebase } = props
    const handleSignOut = () => signOut(firebase)

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
        signOut: firebase => dispatch(signOut(firebase))
    }
}

export default compose(
    firebaseConnect(),
    connect( null, mapDispatchToProps)
)(SignedInLinks)