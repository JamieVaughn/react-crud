
export const createPost = post => {
    return (dispatch, getState, {getFirestore}) => {
        //make async call to db
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date().toLocaleDateString()
        })
        .then(() => dispatch({type: 'CREATE_POST', payload: post}))
        .catch(err => dispatch({type: 'CREATE_ERROR', err}))
    }
}

