import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () => {
  const response = await axios.get('http://localhost:3001/accounts');
  return response.data;
});

export const deleteAccount = createAsyncThunk('accounts/deleteAccount', async (accountId) => {
  await axios.delete(`http://localhost:3001/accounts/${accountId}`);
  return accountId;
});

export const addAccount = createAsyncThunk('accounts/addAccount', async (account) => {
  const response = await axios.post('http://localhost:3001/accounts', account);
  return response.data;
});

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteAccount.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts = state.accounts.filter((account) => account.id !== action.payload);
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAccount.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addAccount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accounts.push(action.payload);
      })
      .addCase(addAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default accountsSlice.reducer;
