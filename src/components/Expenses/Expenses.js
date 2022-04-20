import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState(new Date().getFullYear());

  const filterChangeHandler = (filterValue) => {
    setFilterDate(filterValue);
    console.log(filterValue);
  };

  return (
    <div>
      <Card className="expenses" key={props}>
        <ExpensesFilter
          filterDefault={filterDate}
          onFilterChange={filterChangeHandler}
          className=""
        />
        {props.data.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
