import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

import './cart-item.css';

export const CartItem = (props) => {
    const { productId, productName, productPrice, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={productImage} alt="Shopping Cart Item" />
            <div className="description">
                <p><strong>{productName}</strong></p>
                <p> ${productPrice}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(productId)}> - </button>
                    <input value={cartItems[productId]} onChange={(e) => updateCartItemCount(Number(e.target.value), productId)} />
                    <button onClick={() => addToCart(productId)}> + </button>
                </div>
            </div>
        </div>
    );
};