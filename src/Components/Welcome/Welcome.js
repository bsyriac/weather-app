import logo from './icon.png'
import React from 'react'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="body">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className='heading'>Weather</h1>
            <p className='description'>for the lolzzz</p>

        </div>
    );
}

export default Welcome