import React from 'react'
import getFormatedDate from '../../utils/getFormatedDate'
import './ExpenseDate.css'

export default ({ date }) => {
    const { day, month, year } = getFormatedDate(date)
    return (
        <div className='expense-date'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}
