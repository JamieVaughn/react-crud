import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect, withFirestore, withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'

function PostDetails(props) {
    const [post, setPost] = useState({})
    const id = props.match.params.id

    const promiseFetch = (setter) => {
        firebase.firestore().collection('posts').get()
        .then(data => {
          const postDetail = data.docs.map(d => ({...d.data(), id: d.id})).filter(p => p.id === id) 
          console.log(postDetail[0])
          setPost(postDetail[0])
        })
        .catch(err => {
            console.log(err)
        })
      }
    useEffect(() => {
        promiseFetch()
    }, [])

    if(!props.auth.uid) return <Redirect to='/signin' />
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
            <div className="card-content" data-id={id}>
                <span className="card-title">
                    <a href={post.link}>{post.title}</a>
                </span>
                <p className="flow-text">{post.notes}</p>
            </div>
            <div className="card-action">
                <p className='small-text'>submitted by {post.authorFirstName} {post.authorLastName} on {post.createdAt}</p>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // const id = ownProps.match.params.id
    console.log(state)
    // const posts = state.firestore.data.posts
    // const post = posts ? posts[id] : null
    return {
        // post: post,
        auth: state.firebase.auth,
        firebase: state.firebase
    }
}

export default compose(
    connect(mapStateToProps),
    // firestoreConnect([{collection: 'posts'}])
)(PostDetails)