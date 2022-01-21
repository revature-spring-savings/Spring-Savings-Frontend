
import './App.css';
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
        <CreateNewTransaction accountID='2' userID='1' amount='1800.00' transactionType='DEPOSIT' transactionNote='tax return' transactionDate={today} />
      </header>
    </div>
  );
}

export default App;
