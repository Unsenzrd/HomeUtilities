import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Cheese Selection",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 64.97,
    date: new Date(2021, 6, 28),
  },
  {
    id: "e4",
    title: "New Wooden Desk",
    amount: 499.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Phone Bill",
    amount: 79.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e6",
    title: "Electricity Bill",
    amount: 312.23,
    date: new Date(2022, 7, 22),
  },
  {
    id: "e7",
    title: "Rent",
    amount: 499.99,
    date: new Date(2021, 3, 11),
  },
  {
    id: "e8",
    title: "Air Conditioner",
    amount: 64.97,
    date: new Date(2020, 8, 24),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    console.log(expenses);
  };

  return (
    <div className="globalText">
      <h2 className="globalText" id="headerText">
        Expense Tracker
      </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
