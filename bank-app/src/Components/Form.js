import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../Redux/actions';

const AddAccountForm = () => {
  const dispatch = useDispatch();
  const [customerName, setCustomerName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      customerName,
      accountNumber,
      accountType,
    };

    dispatch(addAccount(newAccount));

    setCustomerName('');
    setAccountNumber('');
    setAccountType('');
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Add Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-2">
          <label className="mr-2">Customer Name:</label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            value={customerName}
            onChange={handleCustomerNameChange}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">Account Number:</label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            value={accountNumber}
            onChange={handleAccountNumberChange}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="mr-2">Account Type:</label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            value={accountType}
            onChange={handleAccountTypeChange}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Add Account
        </button>
      </form>
    </div>
  );
};

export default AddAccountForm;
