import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";

//routes pages
import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';
import Home from './pages/home/Home';
import Events from './pages/events/Events';

// contexts
import AuthProvider, { AuthContext } from './contexts/AuthContext';
import EventProvider from './contexts/EventContext';
import Sidebar from './components/sidebar/Sidebar';
import Vitrine from './pages/vitrine/Vitrine';
import { Update } from './pages/profile/update/Update';
import ProfileProvider from './contexts/ProfileContext';
import PrivateRoute from './components/Redirect';
import { SidebarContext } from './contexts/SidebarContext';
import UnboredCalendar from './pages/calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ProfileProvider>
            <EventProvider>
              <MainContent />
            </EventProvider>
          </ProfileProvider>
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
  const { isSidebarVisible } = useContext(SidebarContext);

  const { user } = useContext(AuthContext)

  return (
    <div className='col-12 d-flex'>
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
          <div className={`${user && isSidebarVisible ? 'col-2' : 'col-0'}`}>
            <Sidebar/>
          </div>
          <div className="position-fixed col-12 z-3">
            <Navbar items={items}/>
          </div>
        </>
      }

      <div className={`${user && isSidebarVisible ? 'col-9' : 'col-12'} transition-all`} style={{paddingTop: showcase ? '0' : '100px'}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login pageType='login'/>}/>
          <Route path="/pro/login" element={<Login pageType="loginPro" />}/>

          <Route path="/register" element={<Register pageType='register' />}/>
          <Route path="/pro/register" element={<Register pageType='registerPro' />}/>

          <Route path="/events" element={<PrivateRoute> 
            <Events />
            </PrivateRoute>
          } />

          <Route path="/update/profile" element={<PrivateRoute>
            <Update />
          </PrivateRoute>
          } />

          <Route path="/calendar" element={<PrivateRoute>
            <UnboredCalendar />
          </PrivateRoute>
          } />



          <Route path="/site_vitrine" element={<Vitrine />} />
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </div>
    </div>
  );
}
export default App;
