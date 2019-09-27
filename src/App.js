import React from 'react';
import './App.css';
import {FruitList} from './FruitItem/FruitList';
import {Cart} from "./cart/Cart";
import {CartProvider} from "./cart/CartContext";


function App() {
    return (
        <CartProvider>
            <div>
                <FruitList />
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
