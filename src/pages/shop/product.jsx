import React from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { productId, productName, productPrice, productImage } = props.data;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p><strong>{productName}</strong></p>
            </div>
            <div>
                <p>${productPrice}</p>
            </div>
            <button className='addToCart' onClick={() => addToCart(productId)}>
                Add to cart
            </button>
        </div>
    );
};