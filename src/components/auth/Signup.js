import React, { useState } from 'react'
import { signUp } from '../../store/actions/authActions'
import {compose} from 'redux'
import {firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'

function SignUp(props) {
    const [credentials, setCredentials] = useState({})
    const [valid, setValid] = useState(true)
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [first, setFirst] = useState('')
    // const [last, setLast] = useState('')


    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        })
    }

    // const handleEmail = e => setEmail(e.target.value)
    // const handlePass = e => setPassword(e.target.value)
    // const handleFirst = e => setFirst(e.target.value)
    // const handleLast = e => setLast(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        // if(!validate(credentials.password)) console.log('password too short')
        console.log({...credentials, password: '*****'})
        props.signUp(credentials, props.firebase)
    }
    
    const validate = password => {
        password.length < 8 ? setValid(false) : setValid(true)
    }
    if(props.auth.uid) return <Redirect to='/' />
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label>First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} autoComplete='off'/>
                </div><div className="input-field">
                    <label>Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input 
                    type="password" id="password" 
                    onChange={handleChange} 
                    onFocus={validate} />
                </div>
                <div className='feedback' hidden={valid}>Password must be at Least 8 Characters</div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                </div>
                <div className='red-text center'>
                    {props.authError || ''}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignUp)