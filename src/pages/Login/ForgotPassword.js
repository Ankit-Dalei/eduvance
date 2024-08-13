import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { sendOtp, verifyOtp } from '../../Service/otpRoute/otpAuth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendOtp(email);
      toast.success(result.message || "OTP sent successfully");
      setOtpSent(true);
    } catch (error) {
      toast.error(error.message || "User not found");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    setLoading(true);
    try {
      const result = await verifyOtp(email, otpCode);
      toast.success(result.message || "OTP verified successfully");
      navigate('/ResetPassWord');
    } catch (error) {
      toast.error(error.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="./Images/forgot_password.svg" alt="Illustration" className="w-1/2" />
        </div>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>{otpSent ? "Verify OTP" : "Forgot Password"}</h2>
          <p className='mb-6'>{otpSent ? "Enter the OTP sent to your email." : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam debitis nihil repudiandae"}</p>
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className='space-y-4'>
              <label htmlFor="email" className='block text-left'>Email:</label>
              <input 
                type="email" 
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button 
                type="submit" 
                disabled={loading}
                className='w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className='space-y-4'>
              <div className="flex justify-between space-x-2">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    className="w-1/4 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className='w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </form>
          )}
          <div className='mt-4'>
            You remember your password?
            <Link to='/' className='text-blue-500 hover:underline ml-1'> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
