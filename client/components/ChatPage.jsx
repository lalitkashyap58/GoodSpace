// src/pages/ChatPage.js
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import VideoChat from './VideoChat/VideoChat';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(true);

  const toggleCamera = () => {
    setIsCameraEnabled((prev) => !prev);
  };

  const toggleMicrophone = () => {
    setIsMicrophoneEnabled((prev) => !prev);
  };

  const sendMessage = (text) => {
    // Handle sending message to the server
    // You might want to use socket.emit here
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {/* Chat display component */}
        {/* Iterate over messages and display them */}
      </div>
      {/* Video chat component */}
      <VideoChat
        isCameraEnabled={isCameraEnabled}
        isMicrophoneEnabled={isMicrophoneEnabled}
        toggleCamera={toggleCamera}
        toggleMicrophone={toggleMicrophone}
      />
      {/* Chat input component */}
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;
