// src/components/ChatInput.js
import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    sendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
