import firebase from 'firebase/app'
import 'firebase/auth'

export const signIn = (authData) => (dispatch, getState) => {
    const {credentials, firebase} = authData
    console.log(authData)
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({type: 'LOGIN_SUCCESS'})
    }).catch(err => {
        dispatch({type: 'LOGIN_ERROR', err})
    })
}

export const signOut = firebase => (dispatch, getState) => {
    console.log(dispatch)
    firebase.auth().signOut().then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'})
    }).catch(err => console.log(err))
}

export const signUp = (newUser, firebase) => (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
    ).then(resp => {
        console.log(resp)
        return firestore.collection('users').doc(resp.user.uid)
    }).then(resp => {
        console.log(resp)
        return resp.set({
            uid: resp.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            fullName: `${newUser.firstName} ${newUser.lastName}`
        })
    }).then(data => dispatch({type: 'SIGNUP_SUCCESS'}))
    .catch(err => {
        dispatch({type: 'SIGNUP_ERROR', err})
    })
}