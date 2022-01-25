import React from 'react'
import React, { Component } from 'react'
import { useState, useEffect } from "react";

import './Login.css';


export default function Login() {
    const [uname, setUsername] = useState('');
    const [upassword, setPassword] = useState('');

    function submit(){
      const a = uname
      const  b = upassword
      //  axios.post(`http://localhost:3000/login /${a}/${b}`) this will be where we make our api call
         .then(response =>{
           const newName = response.data;
           sessionStorage.setItem('name', newName);
           sessionStorage.setItem('username', uname);
         })
         .catch(err => {
             console.log("Error occured", err);
         })
        
 
   }

    return(
        <>
          {/* <FirstNavbar/> */}
          <div className="main1">
            <div className="sub-main1">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    {/* <img src="images/profile.jpg"alt="profile" className="profile"/> */}
                  </div>
                </div>
                <div>
                  <div>
                  <h1 id="t1">Login Page</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>Username</p>
                    <input id="loginput" type="text" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="second-input">
                    <p>Password</p>
                    <input id="loginput" type="password" placeholder="Enter your password" className="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button1">
                    <button id="button1" onClick={submit}>Login</button>
                  </div>
                  <p className="link">
                    <a className="loga" href="/passwordrecovery">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
                  </p>
                  </div>
              </div>
            </div>
            
          </div>
         
        </>
      );
}