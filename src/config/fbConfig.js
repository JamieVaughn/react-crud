import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
export const fbConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_APIKEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: "rf-bookmarks",
    storageBucket: "rf-bookmarks.appspot.com",
    messagingSenderId: "89112768323",
    appId: "1:89112768323:web:6acb8c0973b9098ebd49f6",
    measurementId: "G-T0L6HC2SHC"
  };
console.log(fbConfig)

  // Initialize Firebase
  firebase.initializeApp(fbConfig);
//   firebase.analytics();

  export default firebase;

