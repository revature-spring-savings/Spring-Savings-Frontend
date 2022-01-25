import LoginSignUp from "./pages/loginSignup/loginSignup";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { LoginForm } from "./components/loginSignup/accountBox/loginForm";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {LoginForm.username &&  <Route path="/" element={<LoginSignUp/>} /> }
          <Route path="/" element={<LoginSignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;