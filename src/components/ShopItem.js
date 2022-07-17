import React from 'react';

export default function ShopItem(props) {
    const { item } = props;

    return (
        <div className='catalog__list'>
            <div className='catalog__list-image'>
                <img className='catalog__list-image-img' src={item.img}></img>
            </div>
            <div className='catalog__list-name'>{item.name}</div>
            <div className='catalog__list-color'>{item.color}</div>
            <div className='catalog__list-price'>${item.price}</div>
            <button className='catalog__list-button'>Add to cart</button>
        </div>
    )
}