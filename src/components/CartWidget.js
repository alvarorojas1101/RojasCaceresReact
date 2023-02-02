import React from 'react';
import cart from '../assets/cart.png';

export const CarWidget = () => {
    return (
        <div>
            <img src={cart} className="cart" alt="Carrito de compras" />

        </div>
    )
}