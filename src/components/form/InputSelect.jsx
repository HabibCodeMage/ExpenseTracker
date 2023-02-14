import React from 'react'

export default (props) => {
    return (
        <select className="form-select" aria-label="Default select example"
            onChange={props.onChangeFilter} value={props.defaultValue}>
            {props.children}
        </select>
    )
}
