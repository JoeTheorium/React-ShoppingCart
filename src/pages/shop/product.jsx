import React from 'react'

export const Product = (props) => {
    const { productId, productName, productPrice, productImage } = props.data;
    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p><strong>{productName}</strong></p>
            </div>
            <div>
                <p>${productPrice}</p>
            </div>
            <button className='addToCart'>
                Add to cart
            </button>
        </div>
    );
};