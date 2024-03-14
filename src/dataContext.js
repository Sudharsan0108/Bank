import React from 'react';

// Constant array of user data
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

function AllData() {
  return (
    <div>
      <h2>Bank Users Database</h2>
      {usersWithBankAccounts.map((user) => (
        <div key={user.id}>
          <p>User ID: {user.id}</p>
          <p>Name: {user.username}</p>
          <p>Password: {user.password}</p>
          <p>Balance: {user.balance}</p>
        </div>
      ))}
    </div>
  );
}

export default AllData;
