import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const accounts = useSelector((state) => state.accounts);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Account Number</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.customerName}</td>
              <td>{account.accountNumber}</td>
              <td>{account.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
