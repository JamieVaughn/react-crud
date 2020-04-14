import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from 'firebase/app'

function Profile(props) {
    const [user, setUser] = useState({})
    console.log(props)

    const promiseFetch = (id) => {
        firebase.firestore().collection('users').doc(id).get()
        .then(data => {
            setUser(data.data())
        })
        .catch(err => {
            console.log(err)
        })
      }
    useEffect(() => {
        if(props.auth.uid) promiseFetch(props.auth.uid)
    }, [props.auth.uid])
    
    const formatDate = timestamp => new Date(Number(timestamp)).toLocaleString()
    console.log(props, formatDate())

    if(!props.auth.uid) return <Redirect to='/signin' />

    return (
        <div>
            <h2>My Profile</h2>
            <div className="post card grey lighten-3">
                <div className="card-content">
                    <span className="card-title">{user.fullName || 'Retrieving Record'}</span>
                    <p className="summary">User ID: {props.auth.uid}</p>
                    <p>Email: {props.auth.email}</p>
                </div>
                <div className="card-action">
                    <p className="footer">
                        <p>Last Login: {formatDate(props.auth.lastLoginAt)}</p>
                        <p>Joined: {formatDate(props.auth.createdAt)}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile)