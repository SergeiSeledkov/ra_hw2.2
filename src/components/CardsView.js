import React from 'react';
import ShopCard from './ShopCard';

export default function CardView(props) {
    const { cards } = props;

    return (
        <div className='catalog__main'>
            {cards.map(item => <ShopCard item={item} />)}
        </div>
    )
}