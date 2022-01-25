import React from 'react'

import { useState, useEffect } from "react";

import './Signup.css';


export default function Login() {
    const [uname, setUsername] = useState('');
    const [upassword, setPassword] = useState('');
    const [ufname, setUserFirstName] = useState('');
    const [ulname, setUserLastName] = useState('');
    const [uemail, setUserEmail] = useState('');
    const [uphone, setUserPhone] = useState('');
    const [udob, setUserDob] = useState('');


    function submit(){
      const a = uname
      const b = upassword
      //  axios.post(`http://localhost:3000/users/lsogin/${a}/${b}`) this will be where we make our api call
         .then(response =>{
           const newName = response.data;
           sessionStorage.setItem('name', newName);
           sessionStorage.setItem('username', uname);
           sessionStorage.setItem('password', upassword);
           sessionStorage.setItem('firstname', ufname);
           sessionStorage.setItem('lastname', ulname);
           sessionStorage.setItem('email', uemail);
           sessionStorage.setItem('phone', uphone);
           sessionStorage.setItem('dob', udob);
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
                  <h1 id="t1">Sign Page</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>Username</p>
                    <input id="signinput" type="text" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="second-input">
                    <p>Password</p>
                    <input id="signinput" type="password" placeholder="Enter your password" className="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
                  <div className="third-input">
                    <p>First Name</p>
                    <input id="signinput" type="text" placeholder="Enter your First Name" className="ufname" onChange={e => setUserFirstName(e.target.value)}/>
                  </div>
                  <div className="forth-input">
                    <p>Last Name</p>
                    <input id="signinput" type="text" placeholder="Enter your Last Name" className="ulname" onChange={e => setUserLastName(e.target.value)}/>
                  </div>
                  <div className="fifth-input">
                    <p>Email</p>
                    <input id="signinput" type="text" placeholder="Enter your Email address" className="uemail" onChange={e => setUserEmail(e.target.value)}/>
                  </div>
                  <div className="sixth-input">
                    <p>Phone</p>
                    <input id="signinput" type="text" placeholder="Enter your Phone number" className="uphone" onChange={e => setUserPhone(e.target.value)}/>
                  </div>
                  <div className="seventh-input">
                    <p>DOB</p>
                    <input id="signinput" type="text" placeholder="Enter your Date of birth" className="udob" onChange={e => setUserDob(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button1">
                    <button id="button1" href='/login' onClick={submit}>Sign Up!</button>
                  </div>
                  </div>
              </div>
            </div>
            
          </div>
         
        </>
      );
}