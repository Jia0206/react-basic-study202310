import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3, 23),
    }.date,
    {
      title: 'BBQ 황금올리브',
      price: 21000,
      date: new Date(2023, 5, 23),
    },
    {
      title: '도미노 피자',
      price: 25000,
      date: new Date(2023, 7, 23),
    },
  ];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;
