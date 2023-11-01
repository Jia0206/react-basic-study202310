import React from 'react';
import './App.css';
// import expenses from './components/Expenses';
import Expenses from './components/Expenses';
// import Hello from './components/Hello';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ 황금올리브',
      price: 21000,
      date: new Date(2023, 5 - 1, 23),
    },
    {
      title: '도미노 피자',
      price: 25000,
      date: new Date(2023, 7 - 1, 23),
    },
  ];

  console.log('App 실행!');

  return (
    <>
      <Expenses items={expenses} />
    </>
  );
};

export default App;
