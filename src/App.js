
import './App.css';
import CreateNewTransaction from './components/CreateNewTransaction';
import ViewAllTransactions from './components/ViewAllTransactions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateNewTransaction />
        <ViewAllTransactions />

      </header>
    </div>
  );
}

export default App;
