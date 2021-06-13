import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    // the line below introduces the variable transactions to use in this header component
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount) // creates an array containing the amounts only
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) // gives the total amount after adding the amounts array

    return(
        <div>
            <h4>Balance</h4>
            <h1 id='balance'>${total}</h1>
        </div>
        )
}