import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Get credentials from your own firebase project during setup
var config ={
    apiKey: "AIzaSyDB6pLHBzNVap5Pl17DneP7yqaShYbZqBk",
    authDomain: "testing-api-4a3b5.firebaseapp.com",
    databaseURL: "https://testing-api-4a3b5.firebaseio.com",
    projectId: "testing-api-4a3b5",
    storageBucket: "testing-api-4a3b5.appspot.com",
    messagingSenderId: "302843405289",
    appId: "1:302843405289:web:68ce9f20773a72d262a178"
}
firebase.initializeApp(config)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase