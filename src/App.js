import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import ResetPassWordPage from './pages/Login/ResetPassWordPage';
import List from './pages/Admin/List';
import Home from './pages/Admin/Home';
import Management from './pages/Admin/Management';
import Campus from './pages/Admin/Campus';
import Report from './pages/Admin/Report';
import Setting from './pages/Admin/Setting';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login/>}/> */}
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/ResetPassWord' element={<ResetPassWordPage/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/manage' element={<Management/>}/>
          <Route path='/campus' element={<Campus/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/setting' element={<Setting/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
