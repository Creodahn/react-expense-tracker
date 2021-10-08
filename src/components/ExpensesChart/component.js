import Chart from './../Charts/Chart/component';

function ExpensesChart(props) {
  const chartData = [
    { label: 'Jan', value: 0},
    { label: 'Feb', value: 0},
    { label: 'Mar', value: 0},
    { label: 'Apr', value: 0},
    { label: 'May', value: 0},
    { label: 'Jun', value: 0},
    { label: 'Jul', value: 0},
    { label: 'Aug', value: 0},
    { label: 'Sept', value: 0},
    { label: 'Oct', value: 0},
    { label: 'Nov', value: 0},
    { label: 'Dec', value: 0}
  ];
  let max = 0;

  props.expenses.forEach((expense) => {
    const month = expense.date.getMonth();

    chartData[month].value += 1;
  });

  max = Math.max(...chartData.map((datum) => datum.value));

  return <Chart data={chartData} maximum={max} />;
}

export default ExpensesChart;