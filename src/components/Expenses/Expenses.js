import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState(
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (filterValue) => {
    setFilterDate(filterValue);
  };

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filterDate
  );

  return (
    <div>
      <Card className="expenses" key={props}>
        <ExpensesFilter
          filterDefault={filterDate}
          onFilterChange={filterChangeHandler}
          className=""
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} selectedYear={filterDate} />
      </Card>
    </div>
  );
};

export default Expenses;
