import './scss/App.scss';
import Chat from './components/chat/chat.js';
import Navbar from "./components/navbar/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TransactionPage, Accounts } from "./pages/Home";
import CreateAccount from './components/account/CreateAccount';
import Information from "./pages/Information";
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import LoginButton from "./pages/LoginButton";
import LogoutButton from "./pages/LogoutButton";
import Login from "./pages/Login"
import {BankContext} from './Context/bank-context'
import {useContext} from 'react';

// PLEASE READ
// base url for backend is
// http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/
// be sure to change it on any page that is still using localhost

function App() {
  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;
  let appCTX = useContext(BankContext)

  // console.log(today);

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

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/information" element={<Information />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" element={<LogoutButton />} /> */}
            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/profile" element={<Profile currentUser={currentUser} />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/create" element={<CreateAccount />} />
          </Routes>
        </Router>
      {
        appCTX.onIsLoggedIn? <Chat/>:''
      }
      </div>

    </Auth0Provider>

  )
}

export default App;
