import React from 'react';

export default function ShopCard(props) {
    const { item } = props;

    return (
        <div className='catalog__card'>
            <div className='catalog__card-name'>{item.name}</div>
            <div className='catalog__card-color'>{item.color}</div>
            <div className='catalog__card-image'>
                <img className='catalog__card-image-img' src={item.img}></img>
            </div>
            <div className='catalog__card-buy'>
                <div className='catalog__card-buy-price'>${item.price}</div>
                <button className='catalog__card-buy-button'>Add to cart</button>
            </div>
        </div>
    )
}