import './styles.css';
import Card from './../Card/component';
import ExpenseDate from './../ExpenseDate/component';
import toCurrency from './../../helpers/to-currency';

function ExpenseItem(props) {
  const { expense } = props;
  const { amount, date, title } = expense;

  return (
    <Card classes="expense-item" tag="li">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{toCurrency(amount)}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;