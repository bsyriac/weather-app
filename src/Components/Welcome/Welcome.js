import logo from './icon.png'
import React from 'react'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="body-weather">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className='heading'>Weather</h1>
            <p className='description'>Made by Baptin</p>
        </div>
    );
}

export default Welcome