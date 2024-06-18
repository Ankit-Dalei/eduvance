import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Service/LogAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const onChange=()=>{
        alert('bikash')
    }
    const navigate = useNavigate();
    const [inputInitial, setInputInitial] = useState({
        Username: '',
        Password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputInitial({ ...inputInitial, [name]: value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { Username, Password } = inputInitial;
        navigate('/home')

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
            });
            return;
        }

        if (Password.trim()==="") {
            toast("Password cannot be null", {
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
            });
            return;
        }

        const response = await login(Username, Password);

        if (response.success) {
            const roles = await response.role;
            const trimmed = roles.trim();
            const firstTwo = trimmed.substring(0, 2);

            if (rememberMe && 'credentials' in navigator && window.PasswordCredential) {
                const cred = new window.PasswordCredential({
                    id: Username,
                    password: Password,
                    name: 'Eduvance'
                });
                try {
                    await navigator.credentials.store(cred);
                } catch (error) {
                    console.error('Failed to store credentials:', error);
                }
            }

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
            toast(`Login failed: ${response.error}`, {
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
        setInputInitial({ Username: '', Password: '' });
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const googleClick = () => {
        toast("Sorry for the inconvenience", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
            <div className="login_main">
                <div className="login_container">
                    <div className="login_left_container">
                        <img src="./Images/loginpage.svg" alt="" />
                    </div>
                    <div className="login_right_container">
                        <div className="login_r_c_center">
                            <h1 className="login_rcc_h1">Sign in to Eduvance</h1>
                            <p className="login_tagline">Education Reimagined</p>
                            <form className="login_rcc_form" method='post'>
                                <label htmlFor="email" className='login_label'>Email address</label>
                                <input type="email" id="email" name="Username" placeholder="Email" className='log_inp' value={inputInitial.Username} onChange={handleChange} required />

                                <label htmlFor="password" className='login_label'>Password</label>
                                <input type="password" id="password" name="Password" placeholder="Password" className='log_inp' value={inputInitial.Password} onChange={handleChange} required />

                                <div className="login_options">
                                    <label>
                                        <input type="checkbox" name="remember" checked={rememberMe} onChange={handleRememberMeChange} /> Remember me
                                    </label>
                                    <div className="login_forgot_password"><Link to='/ForgotPassword'>Forgot password?</Link></div>
                                </div>
                              

                                <button className="log_signin_button mt-2" onClick={handleSubmit} >Sign in</button>

                                <div className="log_or_divider">Or Login with</div>
                                <div className='log_g_cen'>
                                    <button type="button" className="google-button" onClick={googleClick}>
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
    );
};

export default Login;
