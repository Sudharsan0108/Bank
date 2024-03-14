

import React, { useState } from 'react';
import TransactionPage from './TransactionPage';

function ParentComponent() {
  const [balance, setBalance] = useState(0);

  const handleDeposit = (amount) => {
    const updatedBalance = balance + amount;
    setBalance(updatedBalance);
  };

  const handleWithdraw = (amount) => {
    const updatedBalance = balance - amount;
    setBalance(updatedBalance);
  };

  const handleLogout = () => {
    
  };

  return (
    <div>
      {}
      <TransactionPage
        balance={balance}
        handleDeposit={handleDeposit}
        handleWithdraw={handleWithdraw} 
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default ParentComponent;
