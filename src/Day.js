import React from 'react';
import './App.css'

function Day (props) {
    
    
    return (
        <div className="day">
            <h2>{ props.day }</h2>
            <h3>{ props.temp } degrees</h3>
            <h3>{ props.rain }</h3>
        </div>
    )
}

export default Day;