import React from 'react'
import './Rstpass.css'

const ResetPassWordPage = () => {
  return (
    <>
      <div className='FG_main'>
        <div className="RPP_container">
            <div className="RPP_illustration">
                <img src="./Images/undraw_confirmation_re_b6q5.svg" alt="Illustration" />
            </div>
            <div className="RPP_form_container">
                <div className='RpP_mainc'>
                <h2>Forgot Password</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi architecto tenetur doloremque magnam.</p>
                <label>Email address</label>
                <input type="email" placeholder="Email address" value="bikashmalu1@gmail.com"  readonly/>
                <label>Reset Password</label>
                <input type="password" placeholder="enter the Password" />
                <input type="password" placeholder="re-enter the Password" />
                <button>Confirm</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassWordPage