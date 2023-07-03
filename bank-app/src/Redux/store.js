import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './reducer';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});

export default store;
