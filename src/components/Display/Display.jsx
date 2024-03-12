import React from 'react';
import './Display.css'
const Display = ({ cart }) => {
    return (
        <div>
            <h1 className='display'>Bottles: {cart}</h1>
        </div>
    );
};

export default Display;