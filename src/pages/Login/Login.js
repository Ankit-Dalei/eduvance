import React, { useState } from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Service/LogAuth';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate=useNavigate();
    const [inputinitial,Setinputinitial]=useState({
        Username: '',
        Password: ''
    })
    const handelChange=(e)=>{
        const { name, value } = e.target;
        Setinputinitial({ ...inputinitial, [name]: value });
    }
    const handelSubmit=async(e)=>{
            e.preventDefault();
            const { Username, Password } = inputinitial;

            if (!Username) {
                toast('Email cannot be empty', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
                return;
              }
        
            if (Password.length < 6) {
              toast("Password must be at least 6 characters long", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              })
              return;
            }
        
            const response = await login(Username, Password);
        
            if (response.success) {
              const roles = await response.role;
              // console.log(roles)
              const trimmed = roles.trim();
              trimmed.toString()
              const firstTwo = trimmed.substring(0, 2);
              // console.log(firstTwo)
        
                if (firstTwo === 'AD') {
                  navigate('/admin');
                } else if (firstTwo === 'MT') {
                  navigate('/management');
                } else if (firstTwo === 'Hod') {
                  navigate('/Hod');
                } else if (firstTwo === 'Teacher') {
                  navigate('/TeacherDashBoard');
                } else if (firstTwo === 'Student') {
                  navigate('/stdash');
                } else {
                  navigate('/');
                }
            } else {
            //   console.log('Login failed:', response.error);
              toast(`Login failed: ${response.error}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              })
              
            }
            Setinputinitial({ Username: '', Password: '' });
    }
  return (
    <>
      <div className="login_main">
        <div className="login_container">
            <div className="login_left_container">
                <img src="./Images/loginpage.svg" alt=""/>
            </div>
            <div className="login_right_container">
                <div className="login_r_c_center">
                    <h1 className="login_rcc_h1">Sign in to Eduvance</h1>
                    <p className="login_tagline">Education Reimagined</p>
                    <form  className="login_rcc_form" method='post'>
                        <label htmlFor="email" className='login_label'>Email address</label>
                        <input type="email" id="email" name="Username" placeholder="Email" className='log_inp' value={inputinitial.Username} onChange={handelChange} required />
        
                        <label htmlFor="password" className='login_label'>Password</label>
                        <input type="password" id="password" name="Password" placeholder="Password" className='log_inp' value={inputinitial.Password} onChange={handelChange} required />
        
                        <div className="login_options">
                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label>
                            <div className="login_forgot_password"><Link to='/ForgotPassword'>Forgot password?</Link></div>
                        </div>
        
                        <button className="log_signin_button" onClick={handelSubmit}>Sign in</button>
        
                        <div className="log_or_divider">Or Login with</div>
                        <div className='log_g_cen'>
                            <button type="button" className="google-button">
                                <img src="https://www.google.com/favicon.ico" alt="Google icon" /> Continue with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      </div>
    </>
  )
}

export default Login