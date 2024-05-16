import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import HomePage from "./components/home/home";
import Login from "./components/registerandlogin/login";
import RegisterPage from "./components/registerandlogin/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AstronomyPage from "./components/astronomy/astronomy";
import NavbarPage from "./components/elements/navbar/navbar";
import SharePage from "./components/share/share";

function App() {
  return (
    <div className="App">
      {/* Helmet component for managing document head */}
      <Helmet>
        <title>Astronomy</title>
      </Helmet>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer position="top-center" />

      {/* Router component for handling client-side routing */}
      <Router>
        {/* Navbar component */}
        <NavbarPage />

        {/* Routes component for defining routes and rendering components based on URL */}
        <Routes>
          {/* Route for rendering HomePage component when URL is '/' */}
          <Route path="/" element={<HomePage />} />

          {/* Route for rendering RegisterPage component when URL is '/register' */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Route for rendering Login component when URL is '/login' */}
          <Route path="/login" element={<Login />} />

          {/* Route for rendering AstronomyPage component when URL is '/astronomy' */}
          <Route path="/astronomy" element={<AstronomyPage />} />

          {/* Route for rendering SharePage component when URL is '/share' */}
          <Route path="/share" element={<SharePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
