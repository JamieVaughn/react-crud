import React from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect, useSelector } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect, useFirestoreConnect, withFirestore, isLoaded, isEmpty} from 'react-redux-firebase'


export default function Dashboard(props) {
    useFirestoreConnect([
         { collection: 'posts' } 
      ])
      const posts = useSelector(state => {
          console.log(state)
          return state.firestore
      })

    //   useFirestoreConnect([{
    //     collection: 'posts',
    //     doc: '1'
    //   }])
    //   const posts = useSelector(
    //     ({ firestore }) => {
    //         console.log(firestore)
    //         return firestore
    //     }
    //   )
    
    
    // const { posts } = props
    console.log(posts)
    return (
        <div className="dashboard container">
            {/* <button onClick={() =>props.firestore.get('posts')}>Get em</button> */}
            {/* {!isLoaded(props.posts)}
            {isEmpty(props.posts)}
            {props.posts.length ? props.posts.map(i => <span>{i.title}</span>) : '' } */}
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

// const mapStateToProps = (state, props) => {
//     console.log(state, props)
//     return {
//         posts: state.firestore.posts
//     }
// }

// export default compose(
//     withFirestore,
//     connect(state =>  ({posts: state.firestore.ordered.posts}))
// )(Dashboard)

