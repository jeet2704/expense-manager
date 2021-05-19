import React,{useState} from 'react'
import '../../style/ExpenseForm.css'
const ExpenseForm = (props) => {
    const [Title, setTitle] = useState("")
    const [Date, setDate] = useState("")
    const [Amount, setAmount] = useState("")

    /*const [UserInput, setUserInput] = useState({
        title: '',
        date: '',
        amount: ''
    })*/
    const titleChangeHandler = (e) =>{
        setTitle(e.target.value)
        /*
        simple aprroach
            setUserInput({
            ...UserInput,
            title: e.target.value
            })
        accurate approach
        setUserInput((prevState) => {
            return{...prevState,
            title: e.target.value};
            })

        */
    }
    const dateChangeHandler = (e) =>{
        setDate(e.target.value)
        /*
            setUserInput({
            ...UserInput,
            date: e.target.value
        })
        */
    }
    const amountChangeHandler = (e) =>{
        setAmount(e.target.value)
        /*
            setUserInput({
            ...UserInput,
            amount: e.target.value
        })
        */
    }
    const formSubmitHandler = (e) =>{
        e.preventDefault()
        const formData = {
            title:Title,
            date: Date,
            amount: +Amount
        } 
        setTitle('')
        setAmount('')
        setDate('')
        props.onCancel(false)
        props.onSaveFormData(formData)
    }
    const cancelHandler = () => {
        setTitle('')
        setAmount('')
        setDate('')
        props.onCancel(false)
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={Title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={Amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={Date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm