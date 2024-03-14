import React, { useState } from 'react';

function ChatboxAssistant() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      // Simulate response from the assistant (for demonstration purposes)
      setTimeout(() => {
        let response = '';
        if (inputText.toLowerCase().includes('policy')) {
          response = 'Our bank offers a range of policies including life insurance, health insurance, and investment plans. Would you like more information on any specific policy?';
        } else if (inputText.toLowerCase().includes('loan')) {
          response = 'We provide various types of loans such as personal loans, home loans, and vehicle loans. To know more about our loan offerings, please visit our website or contact our customer service.';
        } else {
          response = 'Hello! How can I assist you today?';
        }

        // Add loan features content if the user asks about loan
        if (inputText.toLowerCase().includes('loan')) {
          response += '\n\nLoan Features:\n- Loan types: Personal, Home, Car, etc.\n- Interest rates for each loan type\n- Loan repayment terms\n- Eligibility criteria';
        }

        // Add policy features content if the user asks about policy
        if (inputText.toLowerCase().includes('policy')) {
          response += '\n\nPolicy Features:\n- Policy types: Life Insurance, Health Insurance, etc.\n- Policy coverage details\n- Premium rates\n- Claim process';
        }

        setMessages([
          ...messages,
          { text: response, sender: 'assistant' },
          { text: 'Thank you!', sender: 'assistant' }, // Add a "Thank you" message
        ]);
      }, 500);
      setInputText('');
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'assistant'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
}

export default ChatboxAssistant;
