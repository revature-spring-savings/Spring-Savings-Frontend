import LoginSignUp from "./pages/loginSignup/loginSignup";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Accounts from './pages/Accounts';
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import LoginButton from "./pages/LoginButton";
import LogoutButton from "./pages/LogoutButton";

function App() {
  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

  console.log(today);

  return (

    <Auth0Provider
    domain="dev-wjx29g94.us.auth0.com"
    clientId="zlyKi8BrV6Ii0AqjzGIWUap3TOgnwuu1"
    redirectUri={window.location.origin}>
    
    <div className="App">
        <Router>
          <Navbar />
          {/* {<Landing/>} */}
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/" element={<LoginButton/>} />
            <Route path="/logout" element={<LogoutButton />} />
             {/* {<Route path="/Login"element={<Login />} />} */}
            <Route path="/accounts" element={<Accounts />} />
             {/* {<Route path="/pay-or-transfer" element={<PayOrTransfer/>} /> */}
             {/* <Route path="/deposit" element={<Deposit />} /> */}
             {/* <Route path="/withdraw" element={<Withdraw />} */}
          </Routes>
        </Router>
    </div>
    </Auth0Provider>
  );
}

export default App;