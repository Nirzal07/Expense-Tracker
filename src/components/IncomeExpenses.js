import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    // the line below enables the transactions variable from GlobalContext usable for this component
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction=> transaction.amount) // array of amount

    const income = amounts
    .filter(item => item>0)
    .reduce((acc, item) => (acc += item), 0) // adds the positive elements of array amounts and returns the total sum 
    .toFixed(2)

    const expense = (amounts
    .filter(item => item<0) // adds the negative elements of array amounts and returns the total sum(negative)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2) // adds 2 decimal points behind


    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-minus' className= 'money minus'>-${expense}</p>
            </div>
        </div>
    )
}
