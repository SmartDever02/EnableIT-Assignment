import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: DataType = {
  users: [],
  page: 0,
};

export const getUsersFromAPI = createAsyncThunk(
  'getUsersFromAPI',
  async (page: number) => {
    const result = await axios.get(
      `https://give-me-users-forever.herokuapp.com/api/users/${page * 12}/next`
    );
    console.log(result);
    return result.data;
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUsersFromAPI.fulfilled,
      (state: DataType, action: any) => {
        state.users = [...state.users, action.payload.users];
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { setPage } = dataSlice.actions;

export default dataSlice.reducer;
