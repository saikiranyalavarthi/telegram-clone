import React from 'react';
import './MessageItem.css';

const MessageItem = ({ message }) => {
  return (
    <div className={`message-item ${message.sender === 'self' ? 'self' : ''}`}>
      <div className="message-content">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default MessageItem;
