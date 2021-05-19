import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import '../../style/Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
    const [FilterYear, setFilterYear] = useState('2020')
    const filterHandler = (year) => {
        setFilterYear(year)
    }
    const filteredExpenses = expenses.filter(expense => {
        let d = new Date(expense.date)
        return d.getFullYear().toString() === FilterYear
    })
    let expenseContent = <h3 className="error__msg">No Expenses Found!</h3>
    if(filteredExpenses.length > 0 ){
        expenseContent = filteredExpenses.map(expense => 
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
        )
    }
    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter onFilter={filterHandler} filterYear={FilterYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            { expenseContent }
        </Card>
        </div>  
    )
}
export default Expenses