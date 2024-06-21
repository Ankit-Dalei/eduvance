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
import Demo from './pages/Admin/Demo';
import Layout from './pages/Teacher/Layout';
import Dashboard from './pages/Teacher/Dashboard';
import THome from './pages/Teacher/THome';
import Managementlayout from './Management/Managementlayout';
import Managementhome from './Management/Managementhome';
console.log("hello")
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/ResetPassWord' element={<ResetPassWordPage/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/manage' element={<Management/>}/>
          <Route path='/campus' element={<Campus/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/demo' element={<Demo/>}/>
          {/* management */}
          <Route path='/Management' element={<Managementlayout/>}>
            <Route index element={<Managementhome/>}/>
          </Route>
          {/* teacher */}
          <Route path='/teacher' element={<Layout/>}/>
          <Route path='/teacher/dashboard' element={<Dashboard/>}/>
          <Route path='/teacher/home' element={<THome/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
