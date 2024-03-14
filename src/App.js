import React, { useState } from 'react';
import './index.css'; 
import AllData from './AllData';
import AccountOverviewPage from './AccountOverviewPage'; 
import TransactionPage from './TransactionPage';
import SignUpPage from './SignUpPage';
import EnquiryPage from './EnquiryPage';
import Login from './Login';
import TransactionHistoryPage from './TransactionHistoryPage';

const usersWithBankAccounts = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
    accountType: 'Savings',
    balance: 1000
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
    accountType: 'Checking',
    balance: 2000
  },
  {
    id: 3,
    username: 'user3',
    password: 'password3',
    accountType: 'Savings',
    balance: 1500
  },
  {
    id: 4,
    username: 'user4',
    password: 'password4',
    accountType: 'Checking',
    balance: 3000
  },
  {
    id: 5,
    username: 'user5',
    password: 'password5',
    accountType: 'Savings',
    balance: 2500
  }
];

function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userData, setUserData] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null); // State for error message

  const handleSignUp = (username, password, accountType) => {
    if (usersWithBankAccounts.some(user => user.username === username)) {
      setError('Username is already taken.');
      return;
    }

    const newUser = {
      id: usersWithBankAccounts.length + 1,
      username: username,
      password: password,
      accountType: accountType,
      balance: 0
    };

    usersWithBankAccounts.push(newUser);
    setUserData(newUser);
    setCurrentPage('account');
  };

  const handleLogout = () => {
    setUserData(null);
    setCurrentPage('home');
  };

  const handleLogin = (username, password) => {
    const user = usersWithBankAccounts.find(user => user.username === username && user.password === password);
    if (user) {
      setUserData(user);
      setCurrentPage('account');
      setLoginSuccess(true);
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <ul className="navbar-list">
        
          <li className="navbar-item"><button onClick={() => setCurrentPage('home')}>Signup</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('login')}>Login</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('account')}>Account</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('alldata')}>All Data</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('transaction')}>Transaction</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('enquiry')}>Enquiry</button></li>
        </ul>
      </nav>

      <div className="content">
        {currentPage === 'home' && (
          <div className="login-container">
            <div className="signup">
              <SignUpPage handleSignUp={handleSignUp} />
            </div>
          </div>
        )}

        {currentPage === 'login' && (
          <div className="login-container">
            <div className="login">
              <Login handleLogin={handleLogin} />
              {loginSuccess && <p>Login successful!</p>}
              {error && <p>{error}</p>}
            </div>
          </div>
        )}

        {currentPage === 'account' && userData && (
          <AccountOverviewPage userData={userData} />
        )}

        {currentPage === 'transaction' && (
          <TransactionPage
            balance={userData?.balance}
            handleLogout={handleLogout}
          />
        )}

        {currentPage === 'enquiry' && (
          <EnquiryPage />
        )}

        {currentPage === 'transaction history' && (
         <TransactionHistoryPage /> 
        )}

{currentPage === 'alldata' && usersWithBankAccounts && (
           <AllData users={usersWithBankAccounts} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
