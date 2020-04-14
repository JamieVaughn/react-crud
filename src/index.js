import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { reactReduxFirebase, ReactReduxFirebaseProvider, ReduxFirestoreProvider, getFirebase } from 'react-redux-firebase'
import firebase from './config/fbConfig'


firebase.firestore()
//   firebase.analytics();

const rrfConfig = {
  userProfile: 'users', 
  useFirestoreForProfile: true,
  attachAuthIsReady: true
}
 const createStoreWithFirebase = compose(
   reduxFirestore(firebase, rrfConfig),
   applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
 )(createStore)

const store = createStoreWithFirebase(
  rootReducer,
  {}
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* this is like the .getState() call */}
      <ReduxFirestoreProvider {...rrfProps}>
        <App />
      </ReduxFirestoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
