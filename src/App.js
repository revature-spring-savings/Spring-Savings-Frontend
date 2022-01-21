import './App.css';
import AccountByUserID from './components/AccountByUserID';
import AccountByAcctID from './components/AccountByAcctID';
import { TransactionsDetail } from './components/transaction/Transactions';
import CreateNewTransaction from './components/CreateNewTransaction';
import ViewAllWithdrawTransactions from './components/ViewAllWithdrawTransactions';
import ViewOneTransaction from './components/ViewOneTransaction';

function App() {
  let newDate = new Date()
let month = newDate.getMonth() + 1;
let today = `${month<10?`0${month}`:`${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

console.log(today);
  return (
    <div className="App">
      <header className="App-header">



     

 
      </header>
    </div>
  );
}

export default App;
