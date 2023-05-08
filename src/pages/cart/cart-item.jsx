import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { productId, productName, productPrice, productImage } = props.data;
    const { cartItems } = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={productImage} alt="Shopping Cart Item" />
            <div className="description">
                <p><strong>{productName}</strong></p>
                <p> ${productPrice}</p>
                <div className="countHandler">
                    <button> - </button>
                    <input value={cartItems[productId]} />
                    <button> + </button>
                </div>
            </div>
        </div>
    )
}