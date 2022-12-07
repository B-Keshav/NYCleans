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
        else {
          console.log(" :3   <-   cat ")
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
      <div className="App">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/jobs"}>
          <button>Jobs</button>
        </Link>

        <Link to={"/postajob"}>
          <button>Post a Job</button>
        </Link>
        {user ?
          <button onClick={handleLogOut}>Sign Out</button>
          :
          <Link to={"/volunteers"}>
            <button>Sign In</button>
          </Link>
        }
        <Switch>
          <Route path="/volunteers" >
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/jobs">
            < Jobs />
          </Route>
          <Route path="/postajob">
            < PostJob />
          </Route>
          <Route path="/profile">
            <UserProfile />
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