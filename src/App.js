import './App.css';
import AccountByUserID from './components/AccountByUserID';
import AccountByAcctID from './components/AccountByAcctID';
import { TransactionsDetail } from './components/transaction/Transactions';
import CreateNewTransaction from './components/CreateNewTransaction';
import ViewAllWithdrawTransactions from './components/ViewAllWithdrawTransactions';
import ViewOneTransaction from './components/ViewOneTransaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
     <AccountByAcctID/>
     {/* <AccountByUserID/> */}

     

      </header>
    </div>
  );
}

export default App;
