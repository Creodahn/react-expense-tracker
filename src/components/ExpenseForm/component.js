import { useState } from 'react';
import './styles.css';

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    amount: '',
    date: '',
    title: ''
  });
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value
      };
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = userInput;

    newExpense.date = new Date(newExpense.date);

    props.onSave(newExpense);

    setUserInput({
      amount: '',
      date: '',
      title: ''
    });
  }
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}

            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            min="2019-01-01"
            max="2022-12-31"
            type="date"
            value={userInput.date}

            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            min="0.01"
            step="0.01"
            type="number"
            value={userInput.amount}

            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Save Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;