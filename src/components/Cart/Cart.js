import { useContext } from 'react';

import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const itemsLength = cartContext.items.length > 0;

    function addItemHandler(item) {
        cartContext.addItem({...item, amount: 1});
    }

    function removeItemHandler(id) {
        cartContext.removeItem(id);
    }

    function OrderFood() {
        console.log('Ordering Your Delicious Food....');
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                cartContext.items.map((item) =>(
                    <CartItem
                        key={item.id}
                        item={item}
                        onAdd={addItemHandler.bind(null, item)}
                        onRemove={removeItemHandler.bind(null, item.id)}
                    />
                ))
            }
        </ul>
    );

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onHideCart} ></div>
            <div className={classes.modal}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span> ${cartContext.totalAmount.toFixed(2)} </span>
                </div>
                <div className={classes.actions}>
                    <button
                        className={classes['button--alt']}
                        onClick={props.onHideCart}
                    > Close </button>
                {itemsLength && <button className={classes.button} onClick={OrderFood} > Order </button>}
                </div>
            </div>
        </div>
    );
};

export default Cart;
