import React, { useState } from 'react';
import './index.css'

function App() {
  const [loginSuccessMessage, setLoginSuccessMessage] = useState('');
  const [signupSuccessMessage, setSignupSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Example login validation
    if (email === '' || password === '') {
      setError('Both email and password are required for login.');
    } else {
      // Perform login logic here (e.g., API call)
      // For demo, assume login successful
      setLoginSuccessMessage('Login successful!');
      setError('');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const fullName = e.target.elements.fullName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Example signup validation
    if (fullName === '' || email === '' || password === '') {
      setError('All fields are required for signup.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      // Perform signup logic here (e.g., API call)
      // For demo, assume signup successful
      setSignupSuccessMessage('Signup successful!');
      setError('');
    }
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="section">
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label htmlFor="reg-log"></label>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <form onSubmit={handleLogin}>
                        <div className="form-group">
                          <input type="email" className="form-style" placeholder="Email" name="email" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input type="password" className="form-style" placeholder="Password" name="password" />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button type="submit" className="btn mt-4">Login</button>
                      </form>
                      {loginSuccessMessage && <p className="success-message">{loginSuccessMessage}</p>}
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-3 pb-3">Sign Up</h4>
                      <form onSubmit={handleSignup}>
                        <div className="form-group">
                          <input type="text" className="form-style" placeholder="Full Name" name="fullName" />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input type="email" className="form-style" placeholder="Email" name="email" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input type="password" className="form-style" placeholder="Password" name="password" />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button type="submit" className="btn mt-4">Register</button>
                      </form>
                      {signupSuccessMessage && <p className="success-message">{signupSuccessMessage}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
