import React from 'react';

import { Link } from 'react-router-dom';

import Signin from '../Sign-in/SignIn';
import Register from '../Sing-up/SignUp';
import Password from '../Forget-password/Password';

import LoginNavbar from '../Login-navbar/LoginNavbar';
import Copyright from '../Copyright/Copyright';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function Login() {
    const navItems = [
        { name: 'Login', path: '/Login' },
        { name: 'Signup', path: '/Signup' },
        { name: 'Password', path: '/Password' },


    ]
    return (


        <Router>
            <div>
                <Routes>
                    <Route path="/Login" element={<><LoginNavbar /><Signin /><Copyright /></>} />
                    <Route path="/Register" element={<><LoginNavbar /><Register /><Copyright /></>} />
                    <Route path="/Password" element={<><LoginNavbar /><Password /><Copyright /></>} />

                </Routes>
            </div>
        </Router>
    );
}

export default Login;
