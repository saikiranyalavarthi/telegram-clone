import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import './MessageList.css';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        setMessages(response.data.messages || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMessages();
  }, [chatId]);

  const handleSendMessage = (text) => {
    // Simulating a send message functionality. You can replace this with actual API call.
    const newMessage = {
      id: Date.now(),
      text,
      sender: 'self',
    };
    setMessages([...messages, newMessage]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading messages</div>;

  return (
    <div className="message-list-container">
      <div className="message-list">
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessageList;
