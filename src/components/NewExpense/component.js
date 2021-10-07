import './styles.css';
import ExpenseForm from './../ExpenseForm/component';

function NewExpense(props) {
  const onSaveHandler = (newExpenseData) => {
    props.onSave(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveHandler}/>
    </div>
  );
}

export default NewExpense;