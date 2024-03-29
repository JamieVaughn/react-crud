export const createPost = (post) => {
    return (dispatch, getState, {getFirestore}) => {
        //make async call to db
        const firestore = getFirestore()
        firestore.collection('posts').add({
            ...post,
            authorFirstName: 'Jamie',
            authorLastName: 'Vaughn'
            authorId: 1,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_POST'})
        }).catch(err => {
            dispatch({type: 'CREATE_ERROR'}, err)
        })
    }
}