import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect, withFirestore, withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'

function PostDetails(props) {
    const id = props.match.params.id
    console.log(props)
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"><a href={props.link}>{props.link} - {id}</a></span>
                <p className="flow-text">This is the extended detailed notes for this link.</p>
                </div>
                <div className="card-action">
                <p>User Name - Date</p>
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
    }
}

// const enhance = compose(
//     firebaseConnect(['posts']),
//     connect(state => ({
//         posts: state.firebase.ordered.posts
//     }))
// )

// export default enhance(PostDetails)

export default withFirebase(PostDetails)