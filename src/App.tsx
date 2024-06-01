import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

//routes pages
import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';
import Home from './pages/home/Home';

// contexts
import AuthProvider from './contexts/AuthContext';
import Sidebar from './components/sidebar/Sidebar';
import Vitrine from './pages/vitrine/Vitrine';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <MainContent />
        </AuthProvider>
      </Router>
    </div>
  );
}

function MainContent() {
  const location = useLocation();
  const showcase = ['/site_vitrine'].includes(location.pathname);
  const items = [{name: "S'inscrire", links: "/register"}, {name: "Se connecter", links: "/login"}, {name: "Unbored PRO", links: "/pro/login"}];
  const showcaseSideItems = [{name: "Presentation", links: "#presentation"}, {name: "Application", links: "#mobile"}, {name: "Utilisateur", links: "#user"}, {name: "Professionel", links: "#pro"}] 
  const showcaseItems = [{name: "Notre site !", links: "/"}] 



  return (
    <div className='col-12'>
      {showcase ?
        <>
          <div className="position-fixed col-2 h-100">
            <Sidebar items={showcaseSideItems}/>
          </div>
          <div className="position-fixed col-12 z-3">
              <Navbar items={showcaseItems}/>
          </div>
        </>
        :
        <>
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="position-fixed col-12 z-3">
            <Navbar items={items}/>
          </div>
        </>
      }

      <div className='col-12 justify-content-center' style={{paddingTop: showcase ? '0' : '100px'}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login pageType='login'/>}/>
          <Route path="/pro/login" element={<Login pageType="loginPro" />}/>

          <Route path="/register" element={<Register pageType='register' />}/>
          <Route path="/pro/register" element={<Register pageType='registerPro' />}/>

          <Route path="/site_vitrine" element={<Vitrine />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
