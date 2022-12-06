import React from "react";
import UserProfile from "./UserProfile";

import {useState} from "react";

function Login () {
        const [name, setName] = useState("")
        const [age, setAge] = useState(0)
        const [password, setPassword] = useState("")
        const [bio, setBio] = useState("")
        const [org, setOrg] = useState(1)
    
      
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
            .then((res) => console.log(res));
        }
      
        return (
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
        );
      }
      

export default Login;
