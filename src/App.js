import logo from './logo.svg';
import './App.css';
import NavbarCom from './components/NavbarCom';
import BodyCom from './components/BodyCom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarCom/>
      <div>
        <Routes>
        <Route path='/' element={<BodyCom/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </div>
    </Router> 

  );
}

export default App;
