import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { productId, productName, productPrice, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[productId];

    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p><strong>{productName}</strong></p>
                <p> ${productPrice} </p>
            </div>
            <button className='addToCart' onClick={() => addToCart(productId)}>
                Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};