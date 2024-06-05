import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import ResetPassWordPage from './pages/Login/ResetPassWordPage';
import List from './pages/Admin/List';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/ResetPassWord' element={<ResetPassWordPage/>}/>
          <Route path='/admin' element={<List/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
