import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import Jobs from './components/Jobs';
import PostJob from './PostJob';
import UserProfile from './components/UserProfile';
import Organization from './components/Organization';
import EditJob from './components/EditJob';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import UsesrPage from './components/UsersPage';

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
      <div className='logo_bar'>
        <h1 className='logo-text'>NYClean</h1>
      <img className="logo" src="https://static.wixstatic.com/media/3b6ec1_3eb03c3c64a5480bb6cbb21cdec934c6~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/green-product-png-3.png"></img>
      </div>
      
      <div className="App">
        <div className="sidebar">
          <Link to={"/"} className="active">Home</Link>
          <Link to={"/jobs"}>Jobs</Link>
          <Link to={"/postajob"}>Post a Job</Link>
          <Link to={"/users"}>Our Volunteers</Link>
          <Link to={"/organizations"}>Organizations</Link>
          {user ?
            <>
              <Link to={'/profile'}>Profile</Link>
              <Link onClick={handleLogOut} to={"/"}>Sign Out</Link>
            </>
            :
            <Link to={"/volunteers"}>Volunteer</Link>
          }
        </div>

        <Switch>
          <Route path="/volunteers" >
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/jobs">
            < Jobs user={user} />
          </Route>
          <Route path="/postajob">
            < PostJob />
          </Route>
          <Route path="/profile">
            <UserProfile currentUser={user} />
          </Route>
          <Route path='/organizations'>
            <Organization />
          </Route>
          <Route path='/edit/:id'>
            <EditJob />
          </Route>
          <Route path='/users'>
            <UsesrPage user={user}/>
          </Route>
          <Route exact path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;