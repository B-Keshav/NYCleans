import React from "react";
import { useHistory } from "react-router-dom"
// import UserProfile from "./UserProfile";

import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [org, setOrg] = useState(1)
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState(null)

  const [login, setLogin] = useState({
    name: "",
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
        name: name,
        age: age,
        password: password,
        bio: bio,
        organization_id: org,
        address: address,
        city: city,
        state: state,
        zip: zip
      }),
    })
      .then((r) => r.json())
      .then((res) => handleResponse(res));
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
        name: login.name,
        password: login.password
      })
    })
      .then(res => res.json())
      .then(data => onLogin(data))
    history.push('/profile')
  }

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name='name'
              placeholder='Name'
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
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div> <form onSubmit={handleLogin}>
        <div>
          <input
            name='name'
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
