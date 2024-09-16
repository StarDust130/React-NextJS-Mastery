import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  user: null,
};

 const userSlice = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;

