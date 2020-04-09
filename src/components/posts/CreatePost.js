import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
import {Redirect} from 'react-router-dom'

function CreatePost(props) {
    const [post, setPost] = useState({})
    const [valid, setValid] = useState(null)
    const [feedback, setFeedback] = useState('')

    const handleChange = e => {
        setPost({
            ...post,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(post)
        props.createPost(post)
        setFeedback(validate(e) ? 'Post Created Successfully!' : 'Summary is too long!')
        setPost({title: '', link: '', summary: '', notes: ''})
    }
    const validate = e => {
        post.summary < 40 ? setValid(false) : setValid(true)
    }

    if(!props.auth.uid) return <Redirect to='/signin' />
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create New Post</h5>
                <div className="input-field">
                    <label>Title</label>
                    <input 
                    required 
                    type="text" 
                    id="title" 
                    autoComplete='off'
                    value={post.title} 
                    onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Link</label>
                    <input 
                    required 
                    type="text" 
                    autoComplete='off' 
                    id="link" 
                    value={post.link}
                    onChange={handleChange}/>
                </div><div className="input-field">
                    <label>Category</label>
                    <input 
                    required 
                    type="text" 
                    autoComplete='off' 
                    id="category" 
                    value={post.category}
                    onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label>Summary</label>
                    <input type="text" 
                    required
                    autoComplete='off'
                    maxLength={41}
                    id="summary" 
                    value={post.summary}
                    onChange={handleChange} 
                    />
                </div>
                <div className="input-field">
                    <label>Notes</label>
                    <textarea 
                    required 
                    type="text" 
                    autoComplete='off' 
                    id="notes" 
                    value={post.notes}
                    onChange={handleChange}/>
                </div>
                <div className="feedback" hidden={feedback.length === 0}>{feedback}</div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)