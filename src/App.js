// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Loginpage' element={<Loginpage/>} />
        <Route path='/Register' element={<Register/>} />

       

      </Routes>

    </Router>
  );
}

export default App;


