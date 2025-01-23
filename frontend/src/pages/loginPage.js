// frontend/src/pages/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/api/auth/login', formData)
      .then((res) => {
        login(res.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error('Login error:', err);
        setErrorMsg('Invalid credentials.');
      });
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
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
        <button type="submit" style={styles.button}>Login</button>
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