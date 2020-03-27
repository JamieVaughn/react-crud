import React, { useState } from 'react'

export default function SignIn(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.target.value)
    const handlePass = e => setPassword(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password)
    }
    // const styles = {
    //     padding: '1rem',
    //     marginTop: '3rem'
    // }
    // put style={styles} as an attr on the <form>
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
            </form>
        </div>
    )
}