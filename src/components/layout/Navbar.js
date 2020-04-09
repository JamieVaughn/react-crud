import React from 'react'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignOutLink'
import { Link } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'

function Navbar(props) {
    const {auth, profile } = props
    // console.log(auth, profile)

    return (
        <nav className='nav-extended blue-grey darken-3'>
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/" style={{position: 'static'}}>Bookmarks App</Link>
                
            </div>
            <div className="nav-content">
                {
                auth.uid ? 
                <SignedInLinks profile={profile} /> :
                <SignedOutLinks />
                }
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        auth:  state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps)
)(Navbar)