import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ 치킨',
      price: 21000,
      date: new Date(2023, 5 - 1, 23),
    },
    {
      title: '도미노 피자',
      price: 25000,
      date: new Date(2023, 7 - 1, 23),
    },
    {
      title: '응급실 떡볶이',
      price: 18000,
      date: new Date(2023, 10 - 1, 30),
    },
  ];

  //ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');
    console.log(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
