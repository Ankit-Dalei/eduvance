import React from 'react'
import './login.css';

const Login = () => {
  return (
    <>
      <div className="login_main">
        <div className="login_container">
            <div className="login_left_container">
                <img src="./Images/Login.png" alt=""/>
            </div>
            <div className="login_right_container">
                <div className="login_r_c_center">
                    <h1 className="login_rcc_h1">Sign in to Eduvance</h1>
                    <p className="login_tagline">Education Reimagined</p>
                    <form  className="login_rcc_form">
                        <label htmlFor="email" className='login_label'>Email address</label>
                        <input type="email" id="email" name="email" placeholder="Email" className='log_inp'required />
        
                        <label htmlFor="password" className='login_label'>Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" className='log_inp' required />
        
                        <div className="login_options">
                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label>
                            <div className="login_forgot_password">Forgot password?</div>
                        </div>
        
                        <button className="log_signin_button">Sign in</button>
        
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
      </div>
    </>
  )
}

export default Login