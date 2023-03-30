import { useRef, useState } from 'react';

import './MealItemForm.css';
import Input from '../../UI/Input';

function MealItemForm(props) {

    const [vlaidAmount, setValidAmount] = useState(true);
    const amountInput = useRef();

    function submitHandler(e) {
        e.preventDefault();
        const amount = +amountInput.current.value;
        
        if(amount <= 0 || amount > 5) {
            setValidAmount(false);
            return;
        }

        props.onAddToCart(amount);
    }

    return(
        <form className='form' onSubmit={submitHandler} >
            <Input
                lable="Amount"
                ref={amountInput}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button> + Add </button>
            {!vlaidAmount && <p> Please Enter A Valid Amount </p>}
        </form>
    )
}

export default MealItemForm;