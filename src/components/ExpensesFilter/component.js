import React from 'react';

import './styles.css';
import Card from './../Card/component';

const ExpensesFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onUpdate(e.target.value);
  };

  return (
    <Card classes="expenses-filter" tag={props.tag}>
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option default value="">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;