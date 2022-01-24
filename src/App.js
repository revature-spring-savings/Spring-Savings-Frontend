import './App.css';
import { AccountByAcctIDConst } from './components/account/AccountByAcctID';
import { AccountByUserIDConst } from './components/account/AccountByUserID';
import CreateAccount from './components/account/CreateAccount';
import { TransactionsDetail } from './components/transaction';

function App() {
  let newDate = new Date()
  let month = newDate.getMonth() + 1;
  let today = `${month<10?`0${month}`:`${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

console.log(today);
  return (
    <div className="App">
      <header className="App-header">


     {/* <TransactionsDetail/> */}
    {/* <AccountByAcctIDConst/> */}
    {/* <AccountByUserIDConst/> */}
    <CreateAccount/>
 
      </header>
    </div>
  );
}

export default App;