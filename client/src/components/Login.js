import React from "react";
import { useHistory } from "react-router-dom"
import AvatarContainer from "./AvatarComponents/AvatarContainer"
// import UserProfile from "./UserProfile";

import { useState } from "react";

function Login({ onLogin }) {
  const [username, setName] = useState("")
  const [age, setAge] = useState(0)
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [org, setOrg] = useState(1)
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState(null)
  const [avatar, setAvatar] = useState("")

  const [login, setLogin] = useState({
    username: "",
    password: "",
  })

  function handleResponse(res) {
    alert(res.errors)
  }

  let history = useHistory()

  function handleChange(e) {
    const { name, value } = e.target
    setLogin({
      ...login, [name]: value
    })
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        age: age,
        password: password,
        bio: bio,
        organization_id: org,
        address: address,
        city: city,
        state: state,
        zip: zip,
        avatar: avatar
      }),
    })
      .then((r) => r.json())
      .then((res) => onLogin(res));
    history.push('/profile')
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: login.username,
        password: login.password
      })
    })
      .then(res => res.json())
      .then(data => onLogin(data))
    history.push('/profile')
  }

  return (
    <div className="content" id="signUpLogin">
       {/* <h1 className="head">Create Account or Signin</h1> */}
      <div className="signUpForm">
        <h1>Create Account </h1>
        <form onSubmit={handleSubmit}>
          <div className="signDiv"> 
            <input
              name='username'
              placeholder='Username'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name='password'
              type="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              name='age'
              type="number"
              placeholder='Age'
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              name='bio'
              placeholder='Tell us about you!'
              onChange={(e) => setBio(e.target.value)}
            />
            <br />
            <input
              name='org'
              placeholder='Organization'
              onChange={(e) => setOrg(e.target.value)}
            />
            <input
              type="text"
              placeholder="Street Address"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              name="zip"
              onChange={(e) => setZip(e.target.value)}
            />
            <AvatarContainer setAvatar={setAvatar} avatar={avatar} />
          </div>
          <br />
          <br />
          <button type="submit" className="caButton" id="ca">Create Account</button>
        </form>
        <br />
      </div>
      <div className="loginDiv"> <form onSubmit={handleLogin}>
      <h1>Have an account? Login!</h1>
        <div>
          <input
            name='username'
            placeholder='Name'
            onChange={handleChange}
          />
          <input
            name='password'
            type="password"
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="caButton">Sign In</button>
      </form>
      </div>
    </div>
  );
}


export default Login;
