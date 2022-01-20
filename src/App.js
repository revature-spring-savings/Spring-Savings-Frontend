import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import './App.css';

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path ="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
