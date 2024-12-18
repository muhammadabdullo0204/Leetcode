import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
    const navItems = [
        { name: 'Register', path: '/Register' },
        { name: 'Password', path: '/Password' },
    ];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const validate = () => {
        const error = {};

    if (!email) {
        error.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.email = 'Invalid email';
    }

    if (!password) {
        error.password = 'Password is required';
    } else if (password.length < 6) {
        error.password = ' least 6 characters';
    } else if (!/\d/.test(password)) {
        error.password = ' at least one number';
    }

    setError(error);
    return error;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (Object.keys(validationError).length > 0) {
            setError(validationError);
        } else {
            console.log('Form submitted:', { email, password });
            setEmail('');
            setPassword('');
            setError({});
        }
    };

    return (

        <div className='signin'>
            <div className='Signin'>
                <div className='signin-container'>
                    <div className='sign-in'>
                        <img
                            src="https://leetcode.com/static/webpack_bundles/images/logo.c36eaf5e6.svg"
                            alt="Logo"
                        />
                    </div>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="input-container">

                            <div className="input-wrapper">
                                {error.email && <span className="error">{error.email}</span>}
                                <input
                                    className="input-field"
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required

                                />
                                <label className="input-label">Email</label>
                                <span className="input-highlight"></span>
                            </div>


                            <div className="input-wrapper">
                                {error.password && <span className="error">{error.password}</span>}
                                <input
                                    className="input-field"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <label className="input-label">Password</label>
                                <span className="input-highlight"></span>
                            </div>
                        </div>

                        <button type="submit" className="Sign-button">Log in</button>
                    </form>


                    <div className='forget-password'>
                        <Link to="/Password" style={{ color: '#000000A6', textDecoration: 'none' }}>
                        Forget Password
                        </Link>
                      
                   
               
                        <Link to="/Register" style={{ color: '#000000A6', textDecoration: 'none' }}>
                        Sign Up
                        </Link>
                            
                        
                     
                        
                    </div>
                    <br />
                    <div className='accounts'>
                        <p>or you can sign in with</p>
                        <div className='accounts-icon'>
                            <svg viewBox="0 0 24 24" width="30" height="30" opacity="0.4" class="icon__1Md2 icon__3F7K"><path fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm.044-5.213c2.445 0 4.267-1.551 4.556-3.781v-1.891h-4.519v1.89h2.602a2.893 2.893 0 0 1-2.724 1.93c-1.194 0-2.677-1.1-2.677-2.843 0-1.621 1.161-2.876 2.677-2.876.739 0 1.413.279 1.922.736l1.399-1.376a4.744 4.744 0 1 0-3.236 8.212z"></path></svg>

                            <svg viewBox="0 0 24 24" width="30" height="30" opacity="0.4" class="icon__1Md2 icon__3F7K"><path fill-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg>

                            <svg viewBox="0 0 24 24" width="30" height="30" opacity="0.4" class="icon__1Md2 icon__3F7K"><path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm2.52-14.923v1.686h-1.004c-.366 0-.613.077-.74.23-.128.153-.192.383-.192.69v1.207h1.871l-.249 1.891h-1.622v4.849h-1.955V12.78H9v-1.89h1.629V9.497c0-.792.221-1.407.664-1.843.443-.437 1.033-.655 1.77-.655.626 0 1.111.026 1.456.077z"></path></svg>

                            <svg viewBox="-4 -4 108 108" width="30" height="30" opacity="0.4" class="icon__1Md2 icon__3F7K"><path xmlns="http://www.w3.org/2000/svg" d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45 45-20.147 45-45S74.853 5 50 5zM33.125 55.625a5.624 5.624 0 1 1 0-11.25 5.624 5.624 0 1 1 0 11.25zm16.875 0a5.624 5.624 0 1 1 0-11.25 5.624 5.624 0 1 1 0 11.25zm16.875 0a5.624 5.624 0 1 1 0-11.25 5.624 5.624 0 1 1 0 11.25z"></path></svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
