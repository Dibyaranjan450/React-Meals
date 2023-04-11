import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (val) => val.trim() === '';
const isValidLength = (val) => val.trim().length > 5;

function Checkout(props) {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const nameRef = useRef();
    const streetRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();

    const confirmHandler = (e) => {
        e.preventDefault();

        const name = !isEmpty(nameRef.current.value);
        const street = !isEmpty(streetRef.current.value);
        const postalCode = isValidLength(postalCodeRef.current.value);
        const city = !isEmpty(cityRef.current.value);

        setFormInputsValidity({
            name: name,
            street: street,
            city: city,
            postalCode: postalCode,
        });

        if(name && street && postalCode && city) {
            console.log('Ordering Your Delicious Food....');
            props.onSubmit({
                name: nameRef.current.value,
                street: streetRef.current.value,
                postalCode: postalCodeRef.current.value,
                city: cityRef.current.value,
            });
        } else {
            return;
        }
    }

    return(
        <form onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='name'>Strret</label>
                <input type='text' id='street' ref={streetRef} />
            </div>
            <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor='name'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeRef} />
            </div>
            <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='name'>City</label>
                <input type='text' id='city' ref={cityRef} />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}> Confirm </button>
            </div>
        </form>
    );
}

export default Checkout;