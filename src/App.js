import logo from './logo.svg';
import './App.css';
import { TransactionsDetail } from './components/transaction/Actions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TransactionsDetail/>
      </header>
    </div>
  );
}

export default App;
