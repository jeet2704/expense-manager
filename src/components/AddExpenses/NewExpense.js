import React, { useState } from 'react'
import '../../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [ShowForm, setShowForm] = useState(false)
    const onSaveFormDataHandler = (formData) => {
        const collectedFormData = {
            id: Math.random().toString(),
            ...formData
        }
        props.onNewExpense(collectedFormData)
    }
    const cancelHandler = (response) => {
        setShowForm(response)
    }
    return (
        <div className="new-expense">
            {
                ShowForm
                    ?
                    (<ExpenseForm onSaveFormData={onSaveFormDataHandler} onCancel={cancelHandler} />)
                    :
                    (<button onClick={() => setShowForm(true)}>Add New Expenses</button>)

            }

        </div>
    )
}
export default NewExpense