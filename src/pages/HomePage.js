import React, { useState } from 'react';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';
import './HomePage.css';

const HomePage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className="home-page">
      <Header />
      <div className="main-content">
        <ChatList setSelectedChatId={setSelectedChatId} />
        {selectedChatId && <MessageList chatId={selectedChatId} />}
      </div>
    </div>
  );
};

export default HomePage;
