export default function toCurrency(amount) {
  let result = 'Invalid amount';

  if(amount && !Number.isNaN(amount)) {
    result = `$${Number.parseFloat(amount).toFixed(2)}`;
  }

  return result;
}