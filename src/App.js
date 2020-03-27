import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import CreatePost from './components/posts/CreatePost'

function App() {
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
        </div>
      </div>
    </Router>
  );
}

export default App;
