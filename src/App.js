import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/navbar/bottomNavbar";
import Home from "./pages/Home";

function App() {
  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month<10?`0${month}`:`${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

  // test state 
  const currentUser = {
    "user_id": 1,
    "first_name": "Louis",
    "last_name": "Lydia",
    "email": "testing@gmail.com",
    "phone_number": "501301231"
  }

console.log(today);
  return (
    <>
    <div className="App">
        <Router>
          <Navbar currentUser={currentUser}/>
          <BottomNavbar />
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