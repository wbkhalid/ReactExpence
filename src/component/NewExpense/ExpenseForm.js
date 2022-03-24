import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangedHandleer = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangedHandleer = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangedHandleer = (event) => {
        setEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)

        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                    value={enteredTitle}
                    onChange={titleChangedHandleer}></input>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='.01' step='.01'
                    value={enteredAmount}
                    onChange={amountChangedHandleer}></input>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                    value={enteredDate}
                    onChange={dateChangedHandleer} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>

    )
}

export default ExpenseForm;
