// frontend/src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuth';

export default function NavBar() {
  const { token, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav style={styles.nav}>
      <div>
        <Link to="/" style={styles.link}>
          <strong>AdMirable</strong>
        </Link>
      </div>

      <div>
        {token ? (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#f3f3f3',
    marginBottom: '1rem'
  },
  link: {
    marginRight: '1rem',
    textDecoration: 'none',
    color: '#333'
  },
  button: {
    cursor: 'pointer',
    padding: '0.4rem 0.8rem',
    marginLeft: '1rem'
  }
};