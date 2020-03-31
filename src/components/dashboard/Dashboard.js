import React from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firestore'
import {compose} from 'redux'


function Dashboard(props) {
    // const {posts} = props
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PostList />
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
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(Dashboard)