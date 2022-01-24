import LoginSignUp from "./pages/loginSignup/loginSignup";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;