import React from 'react';
import './App.css'

function Header (props) {

    return (
        <div className="header">
            <h1> { props.city } </h1>
        </div>
    )
}

export default Header