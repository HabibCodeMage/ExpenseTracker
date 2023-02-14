import React from 'react'
import './ChartBar.css'
export default ({ label, maxValue, value }) => {
    const barFilHeight = maxValue > 0 ?
        Math.round((value / maxValue) * 100) + "%" : "0%"
    // console.log(maxValue > 0);

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner' >
                <div className='chart-bar__fill' style={{ height: barFilHeight }}>
                </div>
            </div>
            <div className='chart-bar__label'>
                {label}
            </div>
        </div>
    )
}
