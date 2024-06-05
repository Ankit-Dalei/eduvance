import React from 'react'
import './ForgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
     <div className='FG_main'>
        <div className="FG_container">
            <div className="FG_illustration">
                <img src="./Images/forgot_password.svg" alt="Illustration" />
            </div>
            <div className="FG_form_container">
                <div className='FG_Fc_main'>
                <h2>Forgot Password</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam debitis nihil repudiandae</p>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email address" />
                <button><Link to='/ResetPassWord'>Send Link</Link></button>
                <div className='Fg_remem'>You remember your password?<Link to='/' style={{textDecoration:"none", color:"#d7d7d7"}}> Login</Link></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword