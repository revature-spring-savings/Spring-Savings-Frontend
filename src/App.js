import './App.css';
import CreateTransfer from './components/CreateTransfer';
import CreateAccount from './components/CreateAccount';
import Dashboard from './pages/Dashboard';


function App() {
  let newDate = new Date()
let month = newDate.getMonth() + 1;
let today = `${month<10?`0${month}`:`${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

console.log(today);
  return (
    <div className="App">
      

      <Dashboard /><br/><br/><br/>
      <CreateAccount />

     

 
    </div>
  );
}

export default App;
