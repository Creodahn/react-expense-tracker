import './styles.css';
import { useState } from 'react';
import ExpenseForm from './../ExpenseForm/component';

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);
  const onCancelHandler = () => {
    setAddNewExpense(false);
  };
  const onClickHandler = () => {
    setAddNewExpense(true);
  };
  const onSaveHandler = (newExpenseData) => {
    props.onSave(newExpenseData);
  };

  return (
    <div className="new-expense">
      {
        addNewExpense ? <ExpenseForm onCancel={onCancelHandler} onSave={onSaveHandler} />
        : <button type="button" onClick={onClickHandler}>Add New Expense</button>
      }
    </div>
  );
}

export default NewExpense;