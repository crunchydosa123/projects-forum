import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={ <Loginpage /> } />
      <Route path="/signup" element={ <Signuppage /> } />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
