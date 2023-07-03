import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts, deleteAccount } from '../Redux/reducer';
import AddAccountForm from './Form';
import { addAccount } from '../Redux/actions';

const Main = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts.accounts);
  const status = useSelector((state) => state.accounts.status);
  const error = useSelector((state) => state.accounts.error);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const handleAddAccount = (accountData) => {
    dispatch(addAccount(accountData));
  };

  const handleDeleteAccount = (accountId) => {
    dispatch(deleteAccount(accountId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bank Accounts</h1>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100">ID</th>
            <th className="py-2 px-4 bg-gray-100">Customer Name</th>
            <th className="py-2 px-4 bg-gray-100">Account Number</th>
            <th className="py-2 px-4 bg-gray-100">Account Type</th>
            <th className="py-2 px-4 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="py-2 px-4 border">{account.id}</td>
              <td className="py-2 px-4 border">{account.customerName}</td>
              <td className="py-2 px-4 border">{account.accountNumber}</td>
              <td className="py-2 px-4 border">{account.accountType}</td>
              <td className="py-2 px-4 border">
                <button
                  className="text-red-500 font-bold"
                  onClick={() => handleDeleteAccount(account.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className='mt-10'/>
      <AddAccountForm onAddAccount={handleAddAccount} />
    </div>
  );
};

export default Main;
