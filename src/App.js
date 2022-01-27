import './scss/App.scss';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import Login from "./pages/Login"
import CreateAccount from './components/account/CreateAccount';

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
    <div className="App">
        <Router>
          <Navbar />
          {/* {<Landing/>} */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout />} />
             {/* {<Route path="/Login"element={<Login />} />} */}
            <Route path="/profile" element={<Profile currentUser = {currentUser} />} />
             {/* {<Route path="/pay-or-transfer" element={<PayOrTransfer/>} /> */}
             {/* <Route path="/deposit" element={<Deposit />} /> */}
             {/* <Route path="/withdraw" element={<Withdraw />} */}
            <Route path="/create" element={<CreateAccount />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;