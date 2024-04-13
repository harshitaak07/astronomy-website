import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import HomePage from './components/home';
import Login from './components/login';
import RegisterPage from './components/register';

function App() {
  return (
    <div className="App" class = "hori">
      <Helmet>
        <title>Astronomy</title>
      </Helmet>
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