import React from 'react'
import './App.css'
import Day from './Day'

function Days (props) {
    return (
        <div className="days">
            {props.data.map(data => (
        <Day temp={data.temp} rain={ data.rain } clouds={ data.clouds } day={ data.day } />
      ))}
        </div>
    )
}

export default Days