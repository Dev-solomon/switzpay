// import AppLoader  from './components/AppLoader';
import AppHome  from './pages/AppHome';   
import Login  from './components/LoginForm';
import SignUp from './components/SignForm';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

 
function App(){ 
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/signup' element={<SignUp />} /> 
          <Route path='/admin' element={<AppHome />} /> 
        </Routes>
      </Router>
    </> 
  ); 
}






export default App;

