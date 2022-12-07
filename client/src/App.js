import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import Jobs from './components/Jobs';
import PostJob from './PostJob';
import UserProfile from './components/UserProfile';

// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) {
          r.json().then(user => setUser(user))
        }
      })
  }, [])

  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  function onLogin(user) {
    setUser(user)
  }
  

  return (
    <BrowserRouter>
    <div className='top-banner-text'><span className='top-banner'></span></div>
    <div className='logo_bar'>NYClean</div>
      <div className="App">
      <div className="sidebar">
          <Link to={"/"} className="active">Home</Link>
          <Link to={"/jobs"}>Jobs</Link>
          <Link to={"/postajob"}>Post a Job</Link>
           {user ?
           <Link onClick={handleLogOut} to={"/logout"}>Sign Out</Link>
           :
            <Link to={"/volunteers"}>Volunteer</Link>
           }
        </div>
   
        <Switch>
          <Route path="/volunteers" >
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/jobs">
            < Jobs user={user}/>
          </Route>
          <Route path="/postajob">
            < PostJob />
          </Route>
          <Route path="/profile">
            <UserProfile currentUser={user} />
          </Route>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;