import { bindActionCreators } from "redux"

const initState = {
    posts: [
        {title: 'React Docs', link: 'reactjs.com', summary: 'These are the react docs', notes: 'blan blah blah'},
        {title: 'Redux Docs', link: 'reactjs.com', summary: 'These are the react docs', notes: 'blan blah blah'},
        {title: 'Firebase Docs', link: 'reactjs.com', summary: 'These are the react docs', notes: 'blan blah blah'},
    ]
}

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            console.log('create post', action.payload)
            return state
            // return Object.assign({/*takes both*/}, state, {count: 1})
        case 'CREATE_ERROR':
            console.log('error on create', action.err)
            return state
        default: 
            return state
    }
}

export default postReducer

// These are methods of the Store, but we don't call them
//.getState() // reducer uses to fill param #1
//.dispatch(createUpdate()) // ties a user input to an action and then passes to reducer
//.subscribe() // how the components get notified of store updates and then re-render

// actionCreators.js
// function createUpdate() {
//     return {
//         type: 'UPDATE',
//         payload: 1
//     }
// }

// function deletePost () {
//     returns {
//         type:"DELETE"
//     }
// }