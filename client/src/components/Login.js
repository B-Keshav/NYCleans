import React, { useEffect } from "react";
import UserProfile from "./UserProfile";

import {useState} from "react";

function Login () {
        const [name, setName] = useState("")
        const [age, setAge] = useState(0)
        const [password, setPassword] = useState("")
        const [bio, setBio] = useState("")
        const [org, setOrg] = useState(1)

        const [login, setLogin] = useState({
            name: "",
            password: "",
        })
    
        function handleResponse (res) {
             alert(res.errors)
        }

      function handleChange (e) {
          const { name, value } = e.target
            setLogin({
                ...login, [name]: value
            })
            console.log(login)
      }
        

        function handleSubmit(e) {
          e.preventDefault();
          fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                age: age,
                password: password,
                bio: bio,
                organization_id: org, 
            }),
          })
            .then((r) => r.json())
            .then((res) => handleResponse(res));
        }

        function handleLogin (e){
            e.preventDefault();
            fetch("/login", {
                method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify ({
                name: login.name,
                password: login.password
            })
        })
                .then(res => res.json())
                .then(data => console.log(data))

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
