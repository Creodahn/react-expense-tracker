import { useState } from 'react';

import './styles.css';
import Card from './../Card/component';
import ExpenseItem from './../ExpenseItem/component';
import ExpenseItemNoData from './../ExpenseItem/NoData/component';
import ExpensesChart from './../ExpensesChart/component';
import ExpensesFilter from './../ExpensesFilter/component';

function ExpenseList(props) {
  const { expenses } = props;
  const [expensesToDisplay, setExpensesToDisplay] = useState(expenses);
  const filterChangeHandler = (year) => {
    const tmp = [];
    
    expenses.forEach((expense) => {
      if(!year || expense.date.getFullYear().toString() === year) {
        tmp.push(expense);
      }
    });

    setExpensesToDisplay(tmp);
  };

  return (
    <Card classes="expenses" tag="ul">
      <ExpensesChart expenses={expensesToDisplay} />
      <ExpensesFilter tag="li" onUpdate={filterChangeHandler} />
      {
        expensesToDisplay.length > 0 ?
          expensesToDisplay.map((expense) => {
            return (
              <ExpenseItem expense={expense} key={expense.id} />
            );
          })
          : <ExpenseItemNoData />
      }
    </Card>
  );
}

export default ExpenseList;
