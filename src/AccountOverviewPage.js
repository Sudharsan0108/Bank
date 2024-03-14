// AccountOverviewPage.js
import React from 'react';
import backgroundImage from './bank9.jpg'; 
import ChatboxAssistant from './ChatboxAssistant';

function AccountOverviewPage({ userData }) {
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
        {userData && (
          <>
            <h1>Welcome, {userData.username}!</h1>
            <h2>Account Type: Savings</h2>
            <h2>Ask Me</h2> {/* Add heading for the chatbox */}
            <ChatboxAssistant /> {/* Render the ChatboxAssistant component */}
          </>
        )}
      </div>
    </div>
  );
}

export default AccountOverviewPage;
