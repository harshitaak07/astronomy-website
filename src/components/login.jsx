import React, { useState } from "react";
import "./styleTwo.css";

function ValidateForm(formData) {
  const { username, password } = formData;

  const usernameRegex = /^[a-zA-Z0-9]{1,15}$/;
  if (!usernameRegex.test(username)) {
    alert("Invalid username");
    return false;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]){2,}.{10,}$/;
  if (!passwordRegex.test(password)) {
    alert("Invalid password");
    return false;
  }

  return true;
}

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (ValidateForm(formData)) {
      // If form is valid, you can proceed with your logic, for now, just alerting valid form
      alert("Valid Form Submitted!");
    }
  };

  return (
    <section id="login" className="body">
      <div className="imgBx">
        <img src="assets/astronomyLogin.png" alt="background" />
      </div>
      <div className="container">
        <text>Login</text>
        <text style={{ textAlign: "left" }}>Resume By Signing In!</text>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <div className="button-container">
            <button type="submit">Login</button>
            <button type="button">
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
