import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
};

const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      const { payload } = action;
      state.username = payload;
    },
  },
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
