import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { serverUrl } from "../utils/serverUrl";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    // Fetch blog data from the server based on the ID
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/blogs/${id}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">{blog.title}</h2>
          <img src={blog.img} className="img-fluid mb-4" alt="Blog" />
          <p>{blog.details}</p>
          <p className="text-muted">By: {blog.writer}</p>
          <p className="text-muted">Written On: {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
  
}

export default BlogDetail;
