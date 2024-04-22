import React, { useState } from "react";
import "./share.css";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const SharePage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        contentType: "",
        authorId: "1",
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/content", formData);
            toast.dark(`Submitted!`, {className: "toast-message",});
            console.log(response.data.message); 
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <section id="register" className="body">
      <div className="imgBx">
        <form>
        <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="container">
      <text>Get Started!</text>
        <text style={{ textAlign: "left" }}>Share what you have to say!</text>
        <form onSubmit={handleSubmit}>
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
