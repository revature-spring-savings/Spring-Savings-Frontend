import './App.css';

import Dashboard from './pages/Dashboard';

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/navbar/bottomNavbar";
import Home from "./pages/Home";

function App() {
  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

  console.log(today);
  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <BottomNavbar />

          <Dashboard /><br /><br /><br />



          <Routes>
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/Information" element={<Information />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Login"element={<Login />} />
            <Route path="/Accounts" element={<Accounts />} />
            <Route path="/PayOrTransfer" element={<PayOrTransfer/>} />
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/Withdraw" element={<Withdraw />} /> */}
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;