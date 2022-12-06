import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import Jobs from './components/Jobs';
import PostJob from './PostJob';

// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [onLogin, setLogin] = useState([])

  
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
      <Link to={"/volunteers"}>
        <button>Sign In</button>

      </Link>
        <Switch>
          <Route path="/volunteers" >
            <Login onLogin={onLogin}/>
          </Route>
          <Route path="/jobs">
            < Jobs />
          </Route>
          <Route path="/postajob">
            < PostJob />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;