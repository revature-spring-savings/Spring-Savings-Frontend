import './App.css';
import CreateTransfer from './components/CreateTransfer';
import CreateAccount from './components/CreateAccount';


function App() {
  let newDate = new Date()
let month = newDate.getMonth() + 1;
let today = `${month<10?`0${month}`:`${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

console.log(today);
  return (
    <div className="App">
      <header className="App-header">

      <CreateAccount />

     

 
      </header>
    </div>
  );
}

export default App;
