import React, { useState } from "react";
import "./share.css"; // Importing stylesheet for SharePage component
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Importing axios for making HTTP requests
import { Link } from "react-router-dom"; // Importing Link for navigation

const SharePage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    authorId: "",
    title: "",
    description: "",
    contentType: "",
    passage: "",
  });

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { title, description, passage, contentType, authorId } = formData;
      const newContent = {
        title,
        description,
        passage,
        contentType,
        authorId,
        createdAt: null,
        updatedAt: null,
      };
      // Sending POST request to create new content
      const response = await axios.post("/create", newContent);
      toast.dark(`Submitted!`, { className: "toast-message" });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="register" className="body1">
      <div className="imgBx1">
        {/* Form for submitting content */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="passage">Content:</label>
          <input
            type="text"
            id="passage"
            name="passage"
            required
            value={formData.passage}
            onChange={handleChange}
          />
        </form>
        {/* Button to navigate back to astronomy page */}
        <button
          style={{
            width: "85%",
            marginTop: "2%",
            height: "8%",
            color: "white",
            textDecoration: "none",
          }}
        >
          <Link
            to="/astronomy"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Go Back!
          </Link>
        </button>
      </div>

      <div className="container1">
        <text>Get Started!</text>
        <text style={{ textAlign: "left" }}>Share what you have to say!</text>
        {/* Form for submitting content details */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">User:</label>
          <input
            type="text"
            id="authorId"
            name="authorId"
            required
            value={formData.authorId}
            onChange={handleChange}
          />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="contentType">Content-Type:</label>
          <input
            type="text"
            id="contentType"
            name="contentType"
            required
            value={formData.contentType}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default SharePage;
