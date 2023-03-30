import React, { useContext, useEffect, useState } from 'react';

import './HeaderCartButton.css';
import CartIcon from '../Cart/CarrtIcon';
import CartConetxt from '../../store/cart-context';

function Button(props) {
    const cartContext = useContext(CartConetxt);
    const [buttonBump, setButtonBump] = useState(false);

    const numOfItems = cartContext.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    useEffect(() => {
        if(cartContext.items.length === 0) {
            return;
        }
        setButtonBump(true);

        setTimeout(() => {
            setButtonBump(false);
        }, 300);
    }, [cartContext.items]);

    return(
        <button className={buttonBump ? 'button bump' : 'button'} onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span> Your Cart </span>
            <span className='badge' >
                {numOfItems}
            </span>
        </button>
    );
}

export default Button;