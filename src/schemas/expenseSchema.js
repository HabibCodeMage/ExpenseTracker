import { object, string, number, date } from 'yup';
import { minDate, maxDate } from '../data/constants'
export const expenseSchema = object().shape({
    title: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Title is Required'),
    amount: number()
        .min(1, 'Too Short!')
        .max(150, 'Too Long!')
        .required('Amount is Required'),
    date: date().min(minDate, `min date can be ${minDate}`).
        max(maxDate, `max date can be ${maxDate}`).required('Date is Required'),
});