import React, { useState } from 'react';

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

function UserProfile({ userId }) {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);

  const user = usersWithBankAccounts.find(user => user.id === userId);

  if (!user) {
    return <div>User not found.</div>;
  }

  const handleDeposit = () => {
    user.balance += depositAmount;
    setDepositAmount(0);
  };

  const handleWithdrawal = () => {
    if (withdrawalAmount <= user.balance) {
      user.balance -= withdrawalAmount;
    } else {
      alert('Insufficient balance.');
    }
    setWithdrawalAmount(0);
  };

  return (
    <div>
      {/* Your user profile UI here */}
    </div>
  );
}

export default UserProfile;