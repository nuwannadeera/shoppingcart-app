import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, currcy) => acc + currcy.price,0);
    console.log(cart);

    return(
        <div>
            <br />
            {cart.map(itm => (
                    <p>
                        <table>
                            <tr>
                                <th>Image</th>
                                <th>Fruit name</th>
                                <th>Price (Rs)</th>
                            </tr>
                            <tr>
                                <td>
                                <img src={itm.img} />
                                </td>

                                <td>
                                {itm.name}
                                </td>

                                <td>
                                {itm.price}
                                </td>
                            </tr>
                            <hr/>
                        </table>
                    </p>

            ))}

            <h4>Items in Cart : {cart.length}</h4>
            <h4>Total Price : {totalPrice}</h4>
        </div>
    )
}

