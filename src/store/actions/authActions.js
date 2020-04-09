const signIn = ({credentials, firebase}) => (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({type: 'LOGIN_SUCCESS'})
    }).catch(err => {
        dispatch({type: 'LOGIN_ERROR', err})
    })
}

const signOut = firebase => (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'})
    }).catch(err => console.log(err))
}

const signUp = (newUser, firebase) => (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
    ).then(resp => firestore.collection('user').doc(resp.user.id).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        fullName: `${newUser.firstName[0]} ${newUser.lastName}`
    }))
    .then(data => dispatch({type: 'SIGNUP_SUCCESS'}))
    .catch(err => {
        dispatch({type: 'SIGNUP_ERROR'})
    })
}