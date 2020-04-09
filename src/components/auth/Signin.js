import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {signIn} from '../../store/actions/authActions'
import {firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

function SignIn(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.target.value)
    const handlePass = e => setPassword(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password, props)
        const authData = {
            firebase: props.firebase,
            credentials: {email, password}
        }
        props.signIn(authData)
        setPassword('')
    }
    // const styles = {
    //     padding: '1rem',
    //     marginTop: '3rem'
    // }
    // put style={styles} as an attr on the <form>

    if(props.auth.uid) return <Redirect to='/' />
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" id="email" onChange={handleEmail}/>
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" id="password" onChange={handlePass}/>
                </div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Login</button>
                </div>
                <div className='red-text center'>
                    {props.authError || ''}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        firebase: state.firebase
    }
}

const mapDispatchToProps = dispatch => {

    return {
        signIn: authData => dispatch(signIn(authData))
    }
}

export default compose(
    // firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps)
)(SignIn)