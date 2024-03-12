import React, { useEffect, useState } from 'react';
import Bottle from '../../Bottle/Bottle';
import { addToLs, getStoredCart } from '../../Utilities/LocalStorage'

import './Bottles.css'
import Display from '../Display/Display';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then((res) => res.json())
            .then((data) => setBottles(data))
    }, [])

    const handleCount = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }
    useEffect(() => {

        if (bottles.length) {
            const storedCart = getStoredCart()
            // console.log(storedCart);
            const savedCart = []
            storedCart.map((cart) => {
                const bottle = bottles.find(bottle => bottle.id === cart);
                if (bottle) {
                    savedCart.push(bottle)
                }
                setCart(savedCart)
            })
        }

    }, [bottles])
    return (
        <div>
            <div>
                {/* <h1 className='count'>Bottles: {cart.length}</h1> */}
                <Display cart={cart.length} />
            </div>
            <div className='bottles-container'>
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} bottle={bottle} handleCount={handleCount} />)
                }
            </div>
        </div>
    );
};

export default Bottles;