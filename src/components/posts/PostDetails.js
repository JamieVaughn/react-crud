import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect, withFirestore, withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase/app'

function PostDetails(props) {
    const [post, setPost] = useState({})
    const id = props.match.params.id
    console.log(props)

    const promiseFetch = () => {
        firebase.firestore().collection('posts').doc(id).get()
        .then(data => {
            setPost(data.data())
        })
        .catch(err => {
            console.log(err)
        })
      }
    useEffect(() => {
        promiseFetch()
    }, [])
    console.log(post)
    if(!props.auth.uid) return <Redirect to='/signin' />

    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
            <div className="card-content" data-id={id}>
                <span className="card-title"><a href={post.link} target='_blank'>{post.title}</a></span>
                <p className="flow-text">{post.notes}</p>
                </div>
                <div className="card-action">
                <p>submitted by {post.authorFirstName} {post.authorLastName} on {post.createdAt || 'unknown date'} </p>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    console.log(state)
    // const posts = state.firestore.data.posts
    // const post = posts ? posts[id] : null
    return {
        // post: post
        auth: state.firebase.auth
    }
}

// const enhance = compose(
//     firebaseConnect(['posts']),
//     connect(state => ({
//         posts: state.firebase.ordered.posts
//     }))
// )

// export default enhance(PostDetails)

export default connect(mapStateToProps)(PostDetails)