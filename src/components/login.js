import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { serverUrl } from '../utils/serverUrl';

const colStyle = {
  height: '100%',
  overflow: 'hidden',
  padding: '0',
  position: 'relative',
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${serverUrl}/api/users/login`, formData);
      const { token } = response.data;

      // Store the token in cookies
      const expires = new Date();
      expires.setHours(expires.getHours() + 1);
      Cookies.set('token', token, { expires });
      
      // Redirect to dashboard or any other desired page
      window.location.href = '/';
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <MDBRow style={{ margin: 0, width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: 'white' }}>
      <ToastContainer />
      <MDBCol md='12' style={{ ...colStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
          <MDBCardBody className='p-5 w-100 d-flex flex-column'>
            <div style={{ padding: '20px', width: '400px' }}>
              <center>
                <h3 style={{ color: '#9e1030', marginTop: '30px', textAlign: 'center', fontWeight: 'bold' }}>Welcome Back</h3>
              </center>
              <p style={{ color: '#405e77', marginTop: '10px' }}>Login Below</p>
              <form onSubmit={handleSubmit}>
                <div style={{ marginTop: '20px' }}>
                  <MDBInput label='Email Address' id='email' name='email' type='text' value={formData.email} onChange={handleChange} />
                </div>
                <div style={{ marginTop: '20px' }}>
                  <MDBInput label='Password' id='password' name='password' type='password' value={formData.password} onChange={handleChange} />
                </div>
                <MDBBtn type='submit' style={{ marginTop: '30px', width: '100%', backgroundColor: '#9e1030', color: 'white', border: 'none' }}>
                  <span>Login</span>
                </MDBBtn>
              </form>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
