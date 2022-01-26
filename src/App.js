import './scss/App.scss';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Accounts from './pages/Accounts';
import Logout from './pages/Logout';
import { Landing } from './pages/Landing';
import Login from "./pages/Login"
import CreateAccount from './components/account/CreateAccount';
import ViewAllTransactionsByUserID from './components/transaction/ViewAllTransactionsByUserID';
import TransactionPage from './pages/TransactionPage';

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
          {/* {<Landing/>} */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout />} />
             {/* {<Route path="/Login"element={<Login />} />} */}
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<TransactionPage />} />
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