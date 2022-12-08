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
  const [loginError, setLoginError] = useState(false)
  const [createAccError, setCreateAccError] = useState(false)
  const errorResponse = <p style={{ color: "red" }}> Incorrect Username or Password </p>
  const errorResponseCreate = <p style={{ color: "red" }}> Please fill out all fields correctly </p>


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
      .then((r) => {
        if (r.status === 201) {
          r.json()
          history.push('/profile')
        }
        else if (r.status === 422) {
          setCreateAccError(true)
          console.log(r.json())
        }
        else {
          setCreateAccError(true)
          console.log("yikes in the else")
        }
      })
      .then((res) => {
        console.log(res)
        onLogin(res)
      });
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
      .then(res => {
        if (res.status === 200) {
          setLoginError(false)
          res.json()
          .then(data => onLogin(data))
          history.push('/profile')
        }
        else if (res.status === 401) {
          setLoginError(true)
          console.log("yikes")
          console.log(res.json())
        }
        else {
          setLoginError(true)
          console.log("yikes")
        }
      })
  }

  return (
    <div className="content">
      <div className="App">
        <form onSubmit={handleSubmit}>
          {
            createAccError ?
              errorResponseCreate :
              null
          }
          <div>
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
          <button type="submit">Create Account</button>
        </form>
        <br />
        <h4>Have an account? Login!</h4>
      </div>
      <div>
        {
          loginError ?
            errorResponse :
            null
        }
        <form onSubmit={handleLogin}>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}


export default Login;
