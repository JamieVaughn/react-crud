const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var randomNumber = Math.random()

const json = {
    rand: randomNumber,
    name: 'Jim Reynor'
}

exports.helloWorld = functions.https
.onRequest((request, response) => {
 response.send(JSON.stringify(json));
});

const createNotification = notificationObj => (
    admin.firestore().collection('notifications')
    .add(notificationObj)
    .then(doc => console.log('notification added', doc))
)

exports.postCreated = functions.firestore
.document('posts/{postId}').onCreate(doc => {
     const post = doc.data()
     const notification = {
         user: post.authorFirstName + ' ' + post.authorLastName,
         content: 'added a new link!',
        //  time: admin.firestore.Timestamp()
        time: new Date().toISOString()
     }
     return createNotification(notification)
})

exports.userJoined = functions.auth.user()
    .onCreate(user => admin.firestore().collection('users')
    .doc(user.uid).get()
    .then(doc => {
        const newUser = doc.data()
        const notification = {
            user: newUser.fullName,
            content: 'just joined the app!',
            // time: admin.firestore.Timestamp()
            time: Date.now()
        }
        return createNotification(notification)
    }))