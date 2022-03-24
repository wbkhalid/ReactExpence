
import './Expenses.css';
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart';

const Expenses = props => {

      const [filteredYear, setfilteredYear] = useState('2020');
      const filterChangeHandler = (selectedYear) => {
            setfilteredYear(selectedYear);
      };

      const filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear
      })

      return (
            <div>
                  <Card className="expenses">

                        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                        <ExpenseChart expenses={filteredExpenses} />
                        <ExpenseList items={filteredExpenses} />

                  </Card>

            </div>
      )
}
export default Expenses;