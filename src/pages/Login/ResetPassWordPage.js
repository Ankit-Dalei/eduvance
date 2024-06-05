import React, { useState } from 'react';
import './Rstpass.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import updatePassword from '../../Service/UpdatePassword';


const ResetPassWordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      toast.error('Password fields cannot be empty!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // Replace with the actual email
    const email = 'bikashmalu1@gmail.com';

    const response = await updatePassword(email, password);

    if (response.success) {
      toast.success('Password updated successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error('Failed to update password.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className='FG_main'>
        <div className="RPP_container">
          <div className="RPP_illustration">
            <img src="./Images/undraw_confirmation_re_b6q5.svg" alt="Illustration" />
          </div>
          <div className="RPP_form_container">
            <form className='RpP_mainc'>
              <h2>Forgot Password</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi architecto tenetur doloremque magnam.</p>
              <label>Email address</label>
              <input type="email" placeholder="Email address" value="bikashmalu1@gmail.com" readOnly />
              <label>Reset Password</label>
              <input 
                type="password" 
                placeholder="Enter the Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Re-enter the Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={handleSubmit}>Confirm</button>
            </form>
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
  );
}

export default ResetPassWordPage;
