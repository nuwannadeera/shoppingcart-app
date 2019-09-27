import React, {useContext} from 'react';
import {CartContext} from '../cart/CartContext';

export const Fruits = (props) => {
    const [cart,setCart] = useContext(CartContext);

    const addToCart = () => {
        const fruititem = {name: props.name, price: props.price,img: props.img};
        setCart(currentState => [...currentState,fruititem]);
    }

    return (
        <div className="fruitDetail">
            <ul className="Cart-list">
            <br/>
            <br/>
            <img className="img" src={props.img} />
                <br/>
            <h2>{props.name}</h2>
            <h4>Rs:  {props.price}</h4>
                <button className="addcartbtn" onClick={addToCart}>Add Cart</button>
            </ul>
        </div>
    )
}