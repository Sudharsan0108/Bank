import React from 'react';

function TransactionHistoryPage({ transactionData }) {
  // Check if transactionData is defined and has data
  if (!transactionData) {
    return <div className="transaction-history">No transaction history available</div>;
  }

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <div>
        <h3>User: {transactionData.username}</h3>
        <ul>
          {transactionData.transactions.map((transaction, index) => (
            <li key={index}>
              Transaction {index + 1}: {transaction.amount} - {transaction.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistoryPage;
