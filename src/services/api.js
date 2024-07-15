import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devapi.beyondchats.com/api/get_all_chats?page=1%27',
});

export const getAllChats = (page = 1) => {
  return api.get(`/get_all_chats?page=${page}`);
};

export const getChatMessages = (chatId) => {
  return api.get(`/get_chat_messages?chat_id=${chatId}`);
};
