// frontend/src/pages/RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/api/auth/register', formData)
      .then(() => {
        setSuccessMsg('Registration successful! You can now log in.');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((err) => {
        console.error('Registration error:', err);
        setErrorMsg('Registration failed. User might already exist.');
      });
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label><br />
          <input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required 
            style={styles.input}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label><br />
          <input 
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  input: {
    width: '100%',
    padding: '0.4rem'
  },
  button: {
    cursor: 'pointer',
    padding: '0.5rem 1rem'
  }
};