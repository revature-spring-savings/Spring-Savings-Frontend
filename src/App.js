import './App.css';
import CreateTransfer from './components/CreateTransfer';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/navbar/bottomNavbar";
import Home from "./components/navbar/Home";
import CreateAccount from './components/CreateAccount';


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
          <CreateAccount />
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
