import React, { useState } from 'react'

export default function SignUp(props) {
    const [credentials, setCredentials] = useState({})
    const [valid, setValid] = useState(true)
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [first, setFirst] = useState('')
    // const [last, setLast] = useState('')

    const handleChange = e => {
        console.log(e.target.id)
        if(!validate(e)) return
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
        console.log(credentials)
    }
    
    const validate = e => {
        e.target.value.length < 8 ? setValid(false) : setValid(true)
    }

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
                <div className='error' hidden={valid}>Password must be at Least 8 Characters</div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}