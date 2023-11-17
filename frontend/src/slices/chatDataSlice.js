import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import routes from '../routes/routes';

export const fetchChatData = createAsyncThunk(
  'chatData/fetchChatData',
  async () => {
    const { token } = JSON.parse(localStorage.getItem('userId'));
    const response = await axios.get(routes.chatDataPath(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);

const initialState = {
  channels: [],
  currentChannelId: null,
  messages: [],
};

const chatDataSlice = createSlice({
  name: 'chatData',
  initialState,
  reducers: {
    addChannel: (state, action) => {
      const { payload } = action;
      state.channels.push(payload);
    },
    addMessage: (state, action) => {
      const { payload } = action;
      state.messages.push(payload);
    },
    changeChannel: (state, action) => {
      const { payload } = action;
      state.currentChannelId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatData.fulfilled, (state, action) => {
      const { channels, currentChannelId, messages } = action.payload;
      state.channels = channels;
      state.currentChannelId = currentChannelId;
      state.messages = messages;
    });
  },
});

export const { addChannel, addMessage, changeChannel } = chatDataSlice.actions;
export default chatDataSlice.reducer;
