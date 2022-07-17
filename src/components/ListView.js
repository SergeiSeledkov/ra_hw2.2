import React from 'react';
import ShopItem from './ShopItem';

export default function ListView(props) {
    const { items } = props;

    return (
        <div className='catalog__main'>
            {items.map(item => <ShopItem item={item} />)}
        </div>
    )
}