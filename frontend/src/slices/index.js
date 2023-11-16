import { configureStore } from '@reduxjs/toolkit';
import chatDataReducer from './chatDataSlice';

export default configureStore({
  reducer: {
    chatData: chatDataReducer,
  },
});
