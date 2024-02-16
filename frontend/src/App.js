import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './components/About';
import AboutPage from './pages/AboutPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home />} />
      <Route path='/home' element={ <Home />} />
      <Route path='/dashboard' element={ <Dashboard />} />
      <Route path="/login" element={ <Loginpage /> } />
      <Route path="/signup" element={ <Signuppage /> } />
      <Route path="/about" element={ <AboutPage />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
