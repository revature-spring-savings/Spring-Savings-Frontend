import './scss/App.scss';
import Chat from './components/chat/chat.js';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, TransactionPage, Accounts } from "./pages/Home";
import CreateAccount from './components/account/CreateAccount';
import Information from "./pages/Information";
// import Accounts from './pages/Accounts';
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import Login from "./pages/Login"

import ViewAllTransactionsByUserID from './components/transaction/ViewAllTransactionsByUserID';
// import TransactionPage from './pages/TransactionPage';


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
    "email": "testing@gmail.com",
    "phone_number": "501301231"
  }

  console.log(today);
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/information" element={<Information />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateAccount />} />
        </Routes>
      </Router>

      <Chat />
    </div>

  );
}

export default App;