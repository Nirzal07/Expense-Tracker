import React, { useContext } from 'react'
import { Transaction } from './Transaction'

import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction =>    // iterate over transactions and create Transaction component for each
                (<Transaction key={transaction.id} // of the item in transactions with key as unique id
                transaction = {transaction} />))}
            </ul>
        </div>
    )
}
