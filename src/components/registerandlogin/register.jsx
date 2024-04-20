import React, { useState } from "react";
import "./regLog.css";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ValidateForm(formData) {
  const { name, password, email } = formData;

  const nameRegex = /^[a-zA-Z0-9]{1,15}$/;
  if (!nameRegex.test(name)) {
    toast.dark("Invalid name",{className: "toast-message",});
    return false;
  }
  if (!/@\S+\.\S+/.test(email) || email.length > 50) {
    toast.dark("Invalid email format or length exceeds 50 characters",{className: "toast-message",});
    return false;
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]){2,}.{10,}$/;
  if (!passwordRegex.test(password)) {
    toast.dark("Invalid password",{className: "toast-message",});
    return false;
  }

  return true;
}

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (ValidateForm(formData)) {
      toast.dark(`You are now registered!`,{className: "toast-message",});
    }
  };

  return (
    <section id="register" className="body">
      <div className="imgBx">
        <img src="/assets/astronomyRegister.png" alt="background" />
      </div>

      <div className="container">
      <text>Get Started!</text>
        <text style={{ textAlign: "left" }}>Begin By Registering</text>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
