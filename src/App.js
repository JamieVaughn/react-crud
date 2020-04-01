import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import CreatePost from './components/posts/CreatePost'
import firebase from 'firebase'

const asyncFetch = async (setter) => {
  const db = firebase.firestore()
  const data = await db.collection('posts').get()
  console.log(data)
  console.log(data.docs.map(d => d.data()))
  return data.length ? setter(data.docs.map(doc => doc.data())) : ''
}

const promiseFetch = (setter) => {
  firebase.firestore().collection('posts').get().then(data => {
    setter(data.docs.map(d => d.data()))
  })
}

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    promiseFetch(setPosts)
    console.log(posts)

  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/post/:id" component={PostDetails}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create" component={CreatePost}/>
          </Switch>
          {/* {posts.map(i => (console.log(i), <span key={i.title}>{i.title +'-'+ i.link}</span>))} */}
        </div>
      </div>
    </Router>
  );
}

export default App;
