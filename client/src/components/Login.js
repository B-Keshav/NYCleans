import React from "react";
import UserProfile from "./UserProfile";

import {useState} from "react";

function Login () {
        const [user, createUser] = useState({
            name: "",
            age: 0,
            password: "",
            bio: "",
            organization_id: 1
         })
      
        function handleSubmit(e) {
          e.preventDefault();
          fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({user}),
          })
            .then((r) => r.json())
            .then(user => console.log(user));
        }
      
        return (
            <div className="App">
            <form>
              <div>
                <input
                  name='name'
                  placeholder='Name'
                  onChange={(e) => console.log(e.target.value)}
                />
                 <input
                  name='password'
                  placeholder='Password'
                  onChange={(e) => console.log(e.target.value)}
                />
                <input
                  name='age'
                  placeholder='Age'
                  onChange={(e) => console.log(e.target.value)}
                />
                 <input
                  name='bio'
                  placeholder='Tell us about you!'
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </form>
          </div>
        );
      }
      

export default Login;
