import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { UserProvider } from './contexts/AuthContext';
//import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home />} />
      <Route path='/home' element={ <Home />} />
      <Route path='/dashboard' element={ <Dashboard />} />
      <Route path="/login" element={ <Loginpage /> } />
      <Route path="/signup" element={ <Signuppage /> } />
      <Route path="/about" element={ <AboutPage />} />
      <Route path="/project" element={ <ProjectPage />} />
      <Route path="/projectdetail" element={ <ProjectDetailPage />} />
    </Routes>
    </BrowserRouter>
    </UserProvider>

  );
}

export default App;
