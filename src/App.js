import './App.css';

import Dashboard from './pages/Dashboard';

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/navbar/bottomNavbar";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Accounts from './pages/Accounts';
import Logout from './pages/Logout';

function App() {
  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month<10?`0${month}`:`${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

console.log(today);
  return (
    <>
    <div className="App">
       
        <Router>
          <Navbar />
          <BottomNavbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/Login"element={<Login />} /> */}
            <Route path="/accounts" element={<Accounts />} />
            {/* <Route path="/pay-or-transfer" element={<PayOrTransfer/>} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} /> */}
          </Routes>
        </Router>

        <Dashboard /><br/><br/><br/>
    </div>
    </>
  );
}

export default App;