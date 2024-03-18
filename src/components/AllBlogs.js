import React from "react";
import { Container, Row } from "react-bootstrap";
import blog1 from "../assets/blogs/blog1.jpg";
import blog2 from "../assets/blogs/blog2.webp";
import blog3 from "../assets/blogs/blog3.jpg";
import blog4 from "../assets/blogs/blog4.jpg";
import Blog from "../Cards/Blog";
import axios from 'axios';
import { useState, useEffect } from 'react';

const AllBlogs = () => {

  const addOrdinalSuffix = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }

  const [blogs, setBlogs] = useState([]);

  // Fetch blog and car data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/blogs/list');
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    
    fetchBlogs();
  }, []);

  return (
    <Container>
      <h2 className="heading">Recent Posts</h2>
      {blogs.map((blog)=>{
        const createdAtDate = new Date(blog.createdAt);
        const formattedDateWithOrdinal = addOrdinalSuffix(createdAtDate.getDate()) + ' ' + 
          createdAtDate.toLocaleDateString('en-US', { month: 'long' }) + ', ' + 
          createdAtDate.getFullYear();
        return (
          <Blog
          head={blog.title}
          det={`${blog.writer}  ${formattedDateWithOrdinal}`}
          image={blog.img}
        />
        )})}
      <Blog
        head="Zain Mehmood Won Cholistan Desert Rally 2024"
        det="Sulman Ali  Feb 27, 202"
        image={blog1}
      />
      <Blog
        head="Babar Azam To Get First Made In Pakistan MG HS Essence – Javed Afridi"
        det="Sulman Ali  Feb 27, 202"
        image={blog2}
      />
      <Blog
        head="8 Benefits Of Professional Car Inspection Services"
        det="Sulman Ali  Feb 27, 202"
        image={blog3}
      />
      <Blog
        head="Sazgar Introduced Tank500 HEV In Pakistan – Price, Specs & Features"
        det="Sulman Ali  Feb 27, 202"
        image={blog4}
      />
    </Container>
  );
};

export default AllBlogs;
