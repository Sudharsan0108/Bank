// Login.js
import React, { useState } from 'react';
import backgroundImage from './bank0108.jpg';
import AccountOverviewPage from './AccountOverviewPage';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your login validation logic here
    // For simplicity, let's assume the login is successful
    // You should implement proper authentication logic here
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required.');
      return;
    }

    handleLogin(username, password);
    setSignedIn(true);
  };

  if (signedIn) {
    return <AccountOverviewPage />;
  }

  return (
    <div className="signup-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="signup-form" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
      }}>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="quotes">
          <p>"A penny saved is a penny earned."</p>
          <p>"The art is not in making money, but in keeping it"</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
