
import './App.css';
import CreateNewTransaction from './components/CreateNewTransaction';
import ViewAllWithdrawTransactions from './components/ViewAllWithdrawTransactions';
import ViewOneTransaction from './components/ViewOneTransaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ViewAllWithdrawTransactions />
      </header>
    </div>
  );
}

export default App;
