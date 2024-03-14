import React, { useState, useEffect } from 'react';
import backgroundImage from './bank45.jpg'; 
import AccountOverviewPage from './AccountOverviewPage';

const SignUpPage = ({ handleSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('Savings');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [signedUp, setSignedUp] = useState(false); 
  const [displayForm, setDisplayForm] = useState(false); // State to control form display
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const text = "Welcome To Canon Bank Please Click The Button To SIGNUP";
    const interval = setInterval(() => {
      setTypedText(text.substring(0, index));
      setIndex(prevIndex => prevIndex + 1);
      if (index === text.length) clearInterval(interval);
    }, 150); // Adjust typing speed here (milliseconds)
    return () => clearInterval(interval);
  }, [index]);

  const handleSubmit = () => {
    // Check if username already exists in local storage
    const existingUsername = localStorage.getItem('userName');
    if (existingUsername === username) {
      setError('Username already exists.');
      return;
    }

    // Check if email already exists in local storage
    const existingEmail = localStorage.getItem('userEmail');
    if (existingEmail === email) {
      setError('Email already exists.');
      return;
    }

    // Your existing validation logic
    if (!username.match(/^[a-zA-Z]+$/)) {
      setError('Invalid username. Only letters are allowed.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setError('Invalid email format.');
      return;
    }

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('All fields are required.');
      return;
    }

    // If all validations pass, proceed with signup
    handleSignUp(username, email, password, accountType);
    setSuccessMessage('Sign up successful.');
    setSignedUp(true);

    // Store username and email in local storage
    localStorage.setItem('userName', username);
    localStorage.setItem('userEmail', email);
  };

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
      {!signedUp && !displayForm && (
        <button 
          onClick={() => setDisplayForm(true)}
          style={{ 
            width: '200px', 
            padding: '10px', 
            fontSize: '16px',
          }}
        >
          {typedText}
        </button>
      )}
      {!signedUp && displayForm && (
        <div className="signup-form" style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '20px',
          borderRadius: '10px',
        }}>
          <h2>Welcome to <mark>Canon Bank</mark></h2>
          <p>Start your financial journey with us. Sign up for an account today!</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
            <option value="Savings">Savings</option>
          </select>
          <button onClick={handleSubmit}>Sign Up</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <h1 className="success-message">{successMessage}</h1>}
          <div className="quotes">
            <p>"The safest way to double your money is to fold it over and put it in your <mark> BANK</mark>"</p>
            <p>"Financial success begins with the first step."</p>
          </div>
        </div>
      )}
      {signedUp && (
        <AccountOverviewPage />
      )}
    </div>
  );
};

export default SignUpPage;