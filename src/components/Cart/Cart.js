import { useContext, useState } from 'react';

import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const itemsLength = cartContext.items.length > 0;

    const [showCheckout, setShowCheckout] = useState(false);
    const [ordered, setOrdered] = useState(false);


    function addItemHandler(item) {
        cartContext.addItem({...item, amount: 1});
    }

    function removeItemHandler(id) {
        cartContext.removeItem(id);
    }

    function OrderFood() {
        setShowCheckout(true);
    }

    function submitHandler(data) {
        fetch('https://react-meals-278cd-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                userData: data,
                orderedItems: cartContext.items
            }),
            headers: {
                'Content-type': 'applicatuion/json'
            }
        });
        setOrdered(true);
        console.log(cartContext.items);
        cartContext.clearCart();
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
                {ordered ?
                    <p className={classes.text}>Oreder recieived successfully</p>
                : 
                    <div>
                        {cartItems}
                        <div className={classes.total}>
                            <span>Total Amount</span>
                            <span> ${cartContext.totalAmount.toFixed(2)} </span>
                        </div>
                        {showCheckout ?
                            <Checkout onSubmit={submitHandler} onCancel={props.onHideCart} />
                        :
                            <div className={classes.actions}>
                                <button
                                    className={classes['button--alt']}
                                    onClick={props.onHideCart}
                                > Close </button>
                                {itemsLength && <button className={classes.button} onClick={OrderFood} > Order </button>}
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;