import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
import {Redirect} from 'react-router-dom'

const blankPost = {title: '', link: '', category: '', summary: '', notes: ''}

function CreatePost(props) {
    const [post, setPost] = useState(blankPost)
    const [valid, setValid] = useState(true)
    const [feedback, setFeedback] = useState('')

    const handleChange = e => {
        if(e.target.id === 'summary') validate()
        setPost({
            ...post,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(post)
        if(!valid || props.createError) {
            console.log('invalid post', props.createError)
            setFeedback(props.createError)
            return
        }
        setFeedback('Post Created Successfully!')
        props.createPost(post)
        setPost(blankPost)
    }
    const validate = () => {
        setValid(post.summary.length <= 40 ? true : false)
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
                <div className={`feedback ${valid && !feedback ? 'hidden' : ''}`}>{feedback}</div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        createError: state.createError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)