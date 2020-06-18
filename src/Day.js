import React from 'react';
import './App.css'

function Day (props) {
    
    
    return (
        <div className="day">
            <h1>{ props.temp } degrees</h1>
            <h1>{ props.rain }</h1>
            <h1>{ props.clouds }</h1>
        </div>
    )
}

export default Day;