import React from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'


function Dashboard(props) {
    const { posts } = props
    console.log(props)
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

const mapStateToProps = state => {
    console.log(state)
    return {
        posts: state.post.posts
        // post: state.firestore.post
        // posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(Dashboard)