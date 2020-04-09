import React, { useState, useEffect } from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect, useSelector } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect, useFirestoreConnect, withFirestore, isLoaded, isEmpty} from 'react-redux-firebase'
import firebase from '../../config/fbConfig'
import {Redirect} from 'react-router-dom'

// const asyncFetch = async (setter) => {
//   const db = firebase.firestore()
//   const data = await db.collection('posts').get()
//   console.log(data)
//   console.log(data.docs.map(d => d.data()))
//   return data.length ? setter(data.docs.map(doc => doc.data())) : ''
// }

  function Dashboard(props) {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    // useFirestoreConnect([{collection: 'posts', doc: props.postId}])
    // const posts = useSelector(state => state.firebase.ordered)
    const promiseFetch = (setter) => {
        firebase.firestore().collection('posts').get()
        .then(data => {
          setter(data.docs.map(d => ({...d.data(), id: d.id}) ))
        })
        .catch(err => {
            setError(err)
        })
      }
    useEffect(() => {
        promiseFetch(setPosts)
    }, [])
    
    if(!props.auth.uid) return <Redirect to='/signin' />
    if(error) return <div className='red-text'>There was a problem fetching your posts!</div>
    //if(error) return error ? <UIErrorModal /> : <AuthErrorModal />
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PostList posts={posts} />
                </div>
                <div className="col s12 m4 offset-m2">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.dir(state)
    return {
        posts: state.firebase.ordered.posts,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         {collection: 'posts'}
//     ]))(Dashboard)

// export default compose(
//     withFirestore,
//     connect(state => ({
//         posts: state.firestore.ordered.posts
//     }))
// )(Dashboard)
