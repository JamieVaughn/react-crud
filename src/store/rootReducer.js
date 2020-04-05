import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import firestoreReducer from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer




