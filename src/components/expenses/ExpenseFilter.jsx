import React from 'react'
import { filterYears } from '../../data/constants'
import InputSelect from '../form/InputSelect';
import SelectOption from '../form/SelectOption';
import uuid from 'react-uuid';

import './ExpenseFilter.css'
export default ({ onChangeFilter, filteredYear }) => {
    return (
        <div className="expenses-filter">
            <h5>Filter by Year</h5>
            <InputSelect onChangeFilter={onChangeFilter} defaultValue={filteredYear}>
                {
                    filterYears.map((year, index) => {
                        return <SelectOption key={uuid()}
                            value={year}
                        />
                    })
                }
            </InputSelect>
        </div>
    )
}
