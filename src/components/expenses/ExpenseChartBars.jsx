import React from 'react'
import ChartBar from '../chart/ChartBar'
import uuid from 'react-uuid'
export default ({ expensesMonth }) => {
    return (
        <>
            {expensesMonth.map(({ label, value, maxValue }) =>
                <ChartBar key={uuid()} label={label} value={value}
                    maxValue={maxValue} />)}
        </>


    )
}
