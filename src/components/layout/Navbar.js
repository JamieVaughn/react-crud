import React from 'react'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignOutLink'
import { Link } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'

function Navbar(props) {
    const {auth, profile } = props
    console.log(profile ? props : null)

    return (
        <nav className='nav-extended blue-grey darken-3'>
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/" style={{position: 'static'}}>Bookmarks App</Link>
                
            </div>
            <div className="nav-content">
                {
                auth.uid ? 
                <SignedInLinks /> :
                <SignedOutLinks />
                }
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    auth:  state.firebase.auth,
    profile: state.firebase.profile
})

export default compose(
    connect(mapStateToProps)
)(Navbar)