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
import Managementlayout from './pages/Management/Managementlayout';
import Managementhome from './pages/Management/ManagementNavigation/Managementhome';
import Managementschool from './pages/Management/ManagementNavigation/Managementschool';
import Managementbranch from './pages/Management/ManagementNavigation/Managementbranch';
import Managementcourse from './pages/Management/ManagementNavigation/Managementcourse';
import Managementteacher from './pages/Management/ManagementNavigation/Managementteacher';
import Managementstudent from './pages/Management/ManagementNavigation/Managementstudent';
import Managementsection from './pages/Management/ManagementNavigation/Managementsection';

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
            <Route path='Home' element={<Managementhome/>}/>
            <Route path='School' element={<Managementschool/>}/>
            <Route path='Branch' element={<Managementbranch/>}/>
            <Route path='Course' element={<Managementcourse/>}/>
            <Route path='Teacher' element={<Managementteacher/>}/>
            <Route path='Student' element={<Managementstudent/>}/>
            <Route path='Section' element={<Managementsection/>}/>
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
