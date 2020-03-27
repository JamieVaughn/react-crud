import React, { useState } from 'react'

export default function CreatePost(props) {
    const [post, setPost] = useState({})
    const [valid, setValid] = useState(true)

    const handleChange = e => {
        console.log(e.target.id)
        setPost({
            ...post,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(post)
    }
    const validate = e => {
        e.target.value.length > 40 ? setValid(false) : setValid(true)
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create New Post</h5>
                <div className="input-field">
                    <label>Title</label>
                    <input type="text" id="title" autoComplete='off' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Link</label>
                    <input type="text" autoComplete='off' id="link" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Summary</label>
                    <input type="text" 
                    autoComplete='off'
                    maxLength={41}
                    id="summary" 
                    onChange={handleChange} 
                    onBlur={validate} 
                    />
                </div>
                <div className="input-field">
                    <label>Notes</label>
                    <textarea type="text" autoComplete='off' id="notes" onChange={handleChange}/>
                </div>
                <div className="error" hidden={valid}>Summary is too long!</div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Submit</button>
                </div>
            </form>
        </div>
    )
}