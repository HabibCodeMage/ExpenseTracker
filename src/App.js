import './App.css';
import { useState } from 'react';
import ExpenseForm from './components/expenses/ExpenseForm';
import Expenses from './components/expenses/Expenses';
import { expenses } from './data/constants';

function App() {
  const [expenes, setAllexpenes] = useState([...expenses])

  const addExpenseHandler = ({ title, date, amount }) => {
    // alert(JSON.stringify(expense));
    setAllexpenes(prevExpenses => [{ title, amount, date: new Date(date) }, ...prevExpenses])
  }
  return (

    <div className="App">
      <ExpenseForm onExpenseAdd={addExpenseHandler} />
      <Expenses expenses={expenes} onFilterSetExpense={setAllexpenes} />
    </div>
  );
}

export default App;
