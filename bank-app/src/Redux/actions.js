import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () => {
  const response = await axios.get('http://localhost:3001/accounts');
  return response.data;
});

export const addAccount = createAsyncThunk('accounts/addAccount', async (account) => {
  const response = await axios.post('http://localhost:3001/accounts', account);
  return response.data;
});

export const deleteAccount = createAsyncThunk('accounts/deleteAccount', async (accountId) => {
  await axios.delete(`http://localhost:3001/accounts/${accountId}`);
  return accountId;
});
