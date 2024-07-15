import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatItem from './ChatItem';
import './ChatList.css';

const ChatList = ({ setSelectedChatId }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        setChats(response.data.chats || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading chats</div>;

  return (
    <div className="chat-list">
      {chats.map(chat => (
        <ChatItem key={chat.id} chat={chat} setSelectedChatId={setSelectedChatId} />
      ))}
    </div>
  );
};

export default ChatList;
