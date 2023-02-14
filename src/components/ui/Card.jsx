import React from 'react'
import './Card.css'
export default (props) => {
    return (
        <div className='custom-card'>{props.children}</div>
    )
}
