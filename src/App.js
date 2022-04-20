import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Cheddar Cheese",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 64.97,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Wooden Desk",
      amount: 499.99,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log("Expense Added in app.js");
    expenses.push(expense);
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
