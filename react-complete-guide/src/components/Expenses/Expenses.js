import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    console.log(filteredExpenses)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses} />
        </Card> 
    )
}
export default Expenses;