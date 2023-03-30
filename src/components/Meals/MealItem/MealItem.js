import { useContext } from 'react';

import './MealItem.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {

    const price = `$${props.meal.price.toFixed(2)}`;
    const cartConetxt = useContext(CartContext);

    function addToCartHandler(val) {
        cartConetxt.addItem({
            id: props.meal.id,
            item: props.meal.name,
            amount: val,
            price: props.meal.price
        })
    }

    return(
        <li className='meal'>
            <div>
                <h3> {props.meal.name} </h3>
                <div className='description' > {props.meal.description} </div>
                <div>
                    <p className='price'> {price} </p>
                </div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;