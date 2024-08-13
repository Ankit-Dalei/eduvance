import React, { useState } from 'react';
import './Rstpass.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassWordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const email = location.state?.email || '';
  const navigate=useNavigate();
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

    try {
      const response = await axios.post(
        'http://localhost:8181/eduvance/user/update',
        null, // No request body
        {
          params: {
            email,
            password,
          },
        }
      );

      if (response.data.success) {

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
     navigate('/')
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
    } catch (error) {
      toast.error('An unexpected error occurred.', {
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
              <input type="email" placeholder="Email address" value={email} readOnly />
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
