import { io } from 'socket.io-client';
import store from '../slices/index';
import { addChannel, addMessage } from '../slices/chatDataSlice';

const socket = io();

socket.on('newChannel', (channel) => {
  store.dispatch(addChannel(channel));
});
socket.on('newMessage', (message) => {
  store.dispatch(addMessage(message));
});

export default socket;
