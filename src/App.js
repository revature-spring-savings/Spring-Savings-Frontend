<<<<<<< HEAD

import './App.css';
=======
import './scss/App.scss';
import Chat from './components/chat/chat.js';
>>>>>>> c02db43a40652e62bfc3c75804bb88a558d00c58
import Navbar from "./components/navbar/Navbar";
 import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, TransactionPage, Accounts } from "./pages/Home";
import CreateAccount from './components/account/CreateAccount';
import Information from "./pages/Information";
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import LoginButton from "./pages/LoginButton";
import LogoutButton from "./pages/LogoutButton";
import Login from "./pages/Login"

function App() {


  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

  console.log(today);

  // test state 
  const currentUser = {
    "user_id": 1,
    "first_name": "Louis",
    "last_name": "Lydia",
    "username": "testlogin",
    "password": "testPassword",
    "dob": "6/30/99",
    "email": "testing@gmail.com",
    "phone_number": "501301231"
  }

console.log(today);
return (
     <Auth0Provider
     domain="dev-wjx29g94.us.auth0.com"
     clientId="zlyKi8BrV6Ii0AqjzGIWUap3TOgnwuu1"
     redirectUri={window.location.origin}>
 

    
    <div className="App">
      <Router>
        <Navbar />

<<<<<<< HEAD
          {/* {<Landing/>} */}
          <Routes>
            
            <Route path="/landing" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/" element={<Home />}  />
            <Route path="/logout" element={<Logout />} />
             {/* {<Route path="/Login"element={<Login />} />} */}
=======
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
>>>>>>> c02db43a40652e62bfc3c75804bb88a558d00c58
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/information" element={<Information />} />
            <Route path="/" element={<LoginButton/>} />
            <Route path="/logout" element={<LogoutButton />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/profile" element={<Profile currentUser = {currentUser} />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/create" element={<CreateAccount />} />
        </Routes>
      </Router>

      <Chat />
    </div>

     </Auth0Provider>

  )
}

export default App;
