import React from 'react';

import './Header.css';
import meals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return(
        <React.Fragment>
            <header className='header'>
                <h1> ReactMeals </h1>
                <HeaderCartButton onClick={props.onShowCart} > Cart </HeaderCartButton>
            </header>
            <div className='main-image'>
                <img src={meals} alt='meals_img' />
            </div>
        </React.Fragment>
    );
}

export default Header;