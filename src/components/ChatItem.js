import React from 'react';
import './ChatItem.css';

const ChatItem = ({ chat, setSelectedChatId }) => {
  return (
    <div className="chat-item" onClick={() => setSelectedChatId(chat.id)}>
      <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
      <div className="chat-info">
        <h4>{chat.name}</h4>
        <p>{chat.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;
