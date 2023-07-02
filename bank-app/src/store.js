import { createStore } from 'redux';

const initState = {
    accounts: [
      {
        id: 1,
        customerName: "Israa Othman",
        accountNumber: "123456",
        accountType: "Savings"
      },
      {
        id: 2,
        customerName: "Ahmad Zahran",
        accountNumber: "987654",
        accountType: "Student accounts"
      },
      {
        id: 3,
        customerName: "John Doe",
        accountNumber: "789012",
        accountType: "Checking"
      },
      {
        id: 4,
        customerName: "Jane Smith",
        accountNumber: "345678",
        accountType: "Savings"
      },
      {
        id: 5,
        customerName: "Alice Johnson",
        accountNumber: "567890",
        accountType: "Checking"
      },
      {
        id: 6,
        customerName: "Bob Williams",
        accountNumber: "901234",
        accountType: "Savings"
      },
      {
        id: 7,
        customerName: "Emma Davis",
        accountNumber: "234567",
        accountType: "Student accounts"
      },
      {
        id: 8,
        customerName: "Michael Wilson",
        accountNumber: "890123",
        accountType: "Checking"
      },
      {
        id: 9,
        customerName: "Olivia Brown",
        accountNumber: "456789",
        accountType: "Savings"
      },
      {
        id: 10,
        customerName: "James Taylor",
        accountNumber: "012345",
        accountType: "Student accounts"
      },
      {
        id: 11,
        customerName: "Sophia Miller",
        accountNumber: "678901",
        accountType: "Checking"
      },
      {
        id: 12,
        customerName: "William Anderson",
        accountNumber: "345678",
        accountType: "Savings"
      },
      {
        id: 13,
        customerName: "Ava Thomas",
        accountNumber: "789012",
        accountType: "Student accounts"
      },
      {
        id: 14,
        customerName: "Ethan Martinez",
        accountNumber: "123456",
        accountType: "Checking"
      },
      {
        id: 15,
        customerName: "Mia Hernandez",
        accountNumber: "567890",
        accountType: "Savings"
      },
      {
        id: 16,
        customerName: "Alexander Gonzalez",
        accountNumber: "901234",
        accountType: "Student accounts"
      },
      {
        id: 17,
        customerName: "Charlotte Clark",
        accountNumber: "234567",
        accountType: "Checking"
      },
      {
        id: 18,
        customerName: "Benjamin Lewis",
        accountNumber: "890123",
        accountType: "Savings"
      },
      {
        id: 19,
        customerName: "Amelia Rodriguez",
        accountNumber: "456789",
        accountType: "Student accounts"
      },
      {
        id: 20,
        customerName: "Henry Lee",
        accountNumber: "012345",
        accountType: "Checking"
      }
    ]
  };

const reducer = (state = initState, action) => {
  // Add logic for handling actions if needed
  return state;
};

const store = createStore(reducer);

export default store;
