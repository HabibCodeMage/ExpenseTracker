import React from 'react'

export default ({ text }) => {
    return (
        <div className='text-end'>
            <button type="submit" className="btn btn-primary">{text}</button>
        </div>

    )
}