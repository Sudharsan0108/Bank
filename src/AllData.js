import React from 'react';


function AllData({ users }) {
  return (
    <div className="all-data-page">
      <h1>All User Data</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username}, 
             
            <strong> Balance:</strong> {user.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllData;