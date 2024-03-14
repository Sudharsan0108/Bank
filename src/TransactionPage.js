import React, { useState, useEffect } from 'react';
import backgroundImage from './giphy.gif';

function TransactionPage() {
  const [transactionAmount, setTransactionAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || '';

    if (storedUserName) {
      setUserName(storedUserName);
      const storedBalance = parseFloat(localStorage.getItem('balance')) || 0;
      setBalance(storedBalance);
    }

    const storedAllUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    setAllUsers(storedAllUsers);
  }, []);

  const handleDeposit = (amount) => {
    const newBalance = balance + parseFloat(amount);
    setBalance(newBalance);

    localStorage.setItem('balance', newBalance);

    const updatedUsers = allUsers.map(user => {
      if (user.username === userName) {
        return { ...user, balance: newBalance };
      }
      return user;
    });

    setAllUsers(updatedUsers);
    localStorage.setItem('allUsers', JSON.stringify(updatedUsers));

    alert(`Successfully deposited $${amount}`);
  };

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      const newBalance = balance - parseFloat(amount);
      setBalance(newBalance);

      localStorage.setItem('balance', newBalance);

      const updatedUsers = allUsers.map(user => {
        if (user.username === userName) {
          return { ...user, balance: newBalance };
        }
        return user;
      });

      setAllUsers(updatedUsers);
      localStorage.setItem('allUsers', JSON.stringify(updatedUsers));

      alert(`Successfully withdrew $${amount}`);
    } else {
      alert('Insufficient balance.');
    }
  };

  const deposit = () => {
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      handleDeposit(transactionAmount);
      setTransactionAmount('');
    } else {
      alert('Please enter a valid amount for deposit.');
    }
  };

  const withdraw = () => {
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      handleWithdraw(transactionAmount);
      setTransactionAmount('');
    } else {
      alert('Please enter a valid amount for withdrawal.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    setBalance(0);
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
      <div className="signup-form" style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px',
        borderRadius: '10px',
      }}>
        {userName ? (
          <>
            <h2>Welcome, {userName}</h2>
            <h3>Balance: {balance}</h3>
            <input
              type="number"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder="Enter amount"
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <button onClick={deposit} style={{ width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'green', color: '#fff', cursor: 'pointer' }}>Deposit</button>
            <button onClick={withdraw} style={{ width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Withdraw</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h2>Welcome to Canon Bank</h2>
            <p>Please sign up to access your account.</p>
            <button onClick={() => alert('Redirect to signup page')}>Signup</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TransactionPage;
