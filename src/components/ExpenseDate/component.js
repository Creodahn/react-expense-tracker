import './styles.css';

function ExpenseDate(props) {
  const { date } = props;

  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.toLocaleDateString('en-US', { month: 'long' })}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__day">{date.getDay()}</div>
    </div>
  );
}

export default ExpenseDate;
