import React from 'react';

export default function IconSwitch(props) {
    const { icon, onSwitch } = props;

    return (
        <div className='catalog__header'>
            <span className='material-icons' onClick={onSwitch}>
                {icon}
            </span>
        </div>
    )
}