import React, { useState } from "react";
import "./regLog.css"; // Importing stylesheet for Login component
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// Function to validate form data
function ValidateForm(formData) {
  const { username, password } = formData;

  const usernameRegex = /^[a-zA-Z0-9]{1,15}$/;
  if (!usernameRegex.test(username)) {
    toast.dark("Invalid username", { className: "toast-message" });
    return false;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]){}.{10,}$/;
  if (!passwordRegex.test(password)) {
    toast.dark("Invalid password", { className: "toast-message" });
    return false;
  }

  return true;
}

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (ValidateForm(formData)) {
      toast.dark(`You are now logged in!`, { className: "toast-message" });
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
            {/* Conditional rendering of Sign In or User button */}
            <button>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
