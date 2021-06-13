import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState(''); // always use this for input field in react
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random()* 10000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit= {onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'></label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount <br/>
                    (negative - expense, positive - income)
                    </label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </div>
    )
}

// on line 27 everytime user presses a key the value of text variable(state) updates and setText is trigered
// which constantly updates the text variable and reloads this whole component

// same at line 33
