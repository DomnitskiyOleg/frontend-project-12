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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChatData.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default chatDataSlice.reducer;
