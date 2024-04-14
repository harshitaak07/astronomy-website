import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import HomePage from './components/home';
import Login from './components/login';
import RegisterPage from './components/register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App" class = "hori">
      <Helmet>
        <title>Astronomy</title>
      </Helmet>
      <ToastContainer position="top-center"/>
      <Router> 
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <RegisterPage/>
      <Login/>
    </div>
  );
}

export default App;