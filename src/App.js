import './scss/App.scss';
import Chat from './components/chat/chat.js';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, TransactionPage, Accounts } from "./pages/Home";
import CreateAccount from './components/account/CreateAccount';
import Information from "./pages/Information";
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/auth0/loading';
import Login from "./pages/Login"
import Profile from './pages/Profile';


const App = () => {
  const { isLoading } = useAuth0();

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
  if (isLoading) {
    return <Loading />;
    }
return (
  
  <div className="App">
    
        <Navbar />
        <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/profile" element={<Profile/>} />
          <Route path="/home" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/information" element={<Information />} />
            { <Route path="/logout" element={<Logout />} /> }
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/create" element={<CreateAccount />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      <Chat />
    </div>
  )
}

export default App;
