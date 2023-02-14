import React from 'react'
import { Formik } from 'formik';
import { expenseForm } from '../../data/constants'
import { expenseSchema } from '../../schemas/expenseSchema.js'
import InputForm from '../form/InputForm';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';
import { minDate, maxDate } from '../../data/constants';
import './ExpenseForm.css'
export default ({ onExpenseAdd }) => {
    return (
        <div className='expense-form'>
            <Formik
                initialValues={expenseForm}
                validationSchema={expenseSchema}
                onSubmit={(values, { resetForm }) => {
                    // same shape as initial values
                    resetForm()
                    onExpenseAdd(values)
                }}
            >
                {({ errors, touched }) => (
                    <InputForm ClassName="expens-form__outerwrapper">
                        <Input label="Title" name="title" type="text"
                            errors={errors.title} touched={touched.title} min="" max="" />
                        <Input label="Amount" name="amount" type="number" min={10}
                            errors={errors.amount} touched={touched.amount} />
                        <Input label="Date" name="date" type="date" min={minDate} max={maxDate}
                            errors={errors.date} touched={touched.date} />
                        <SubmitButton text="Add Expense" />
                    </InputForm>
                )
                }
            </Formik>
        </div>
    )
}
