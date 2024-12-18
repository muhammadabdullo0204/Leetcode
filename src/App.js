import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.js';
import NotFound from './Page-not-found/PageNoutFound.jsx';
import Main from './Main/Main.jsx';
import LoginNavbar from './Login-navbar/LoginNavbar';
import Signin from './Sign-in/SignIn';
import Register from './Sing-up/SignUp';
import Password from './Forget-password/Password';
import Copyright from './Copyright/Copyright';

import './Navbar/Navbar.css';
import './Footer/Footer.css';
import './Page-not-found/PageNoutFound.css';
import './Login/Login.css';
import './Sign-in/SignIn.css';
import './Sing-up/SignUp.css';
import './Forget-password/Password.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><Main /><Footer /></>} />
          <Route path="/Main" element={<><Navbar /><Main /><Footer /></>} />
          
          <Route path="/Login" element={<><LoginNavbar /><Signin /><Copyright /></>} />
          <Route path="/Register" element={<><LoginNavbar /><Register /><Copyright /></>} />
          <Route path="/Password" element={<><LoginNavbar /><Password /><Copyright /></>} />
                    <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

