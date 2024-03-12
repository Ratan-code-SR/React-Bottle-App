import React, { useState } from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleCount }) => {
    const [stock, setStock] = useState(bottle.stock)
    const handleStock = () => {
        // console.log(stock);
        if (stock > 0) {
            setStock(stock - 1)         
        }else{
            alert("Out of stock!")
        }
    }

    return (
        <>
            <div className='bottle-container'>
                <div className='bottle-home'>
                    <h3>Name: {bottle.name}</h3>
                    <img className='image-bottle' src={bottle.img} alt="" />
                    <p>Price: {bottle.price} $</p>
                    <p>Stock: {stock}</p>
                    <button  onClick={() => {
                        handleCount(bottle)
                        handleStock(bottle)
                    }} className='button'>buy now</button>
                </div>
            </div>
        </>
    );
};

export default Bottle;