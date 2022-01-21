
import './App.css';
import CreateNewTransaction from './components/CreateSingleTransaction';
import CreateTransfer from './components/CreateTransfer';
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
        <CreateTransfer />
      </header>
    </div>
  );
}

export default App;
