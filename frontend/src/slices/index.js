import { configureStore } from '@reduxjs/toolkit';
import chatDataReducer from './chatDataSlice';
import usernameReducer from './usernameSlice';

export default configureStore({
  reducer: {
    chatData: chatDataReducer,
    username: usernameReducer,
  },
});
