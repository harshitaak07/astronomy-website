import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import HomePage from './components/home/home';
import Login from './components/registerandlogin/login';
import RegisterPage from './components/registerandlogin/register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AstronomyPage from './components/astronomy/astronomy';
import NavbarPage from './components/elements/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Astronomy</title>
      </Helmet>
      <ToastContainer position="top-center"/>
      <Router>
        <NavbarPage/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/astronomy" element={<AstronomyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
