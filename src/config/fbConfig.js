import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

console.log(process.env.REACT_FIRESTORE_APIKEY)
// Your web app's Firebase configuration
export const fbConfig = {
    apiKey: 'AIzaSyCLxdL8sghwkbps41dVtF-ggYm1mSXQ2Y8',
    authDomain: 'rf-bookmarks.firebaseapp.com',
    databaseURL: "https://rf-bookmarks.firebaseio.com",
    projectId: "rf-bookmarks",
    storageBucket: "rf-bookmarks.appspot.com",
    messagingSenderId: "89112768323",
    appId: "1:89112768323:web:6acb8c0973b9098ebd49f6",
    measurementId: "G-T0L6HC2SHC"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
//   firebase.analytics();

  export default firebase;

