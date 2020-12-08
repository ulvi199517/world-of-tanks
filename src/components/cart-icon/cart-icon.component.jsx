import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-black-border.svg';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);
export default CartIcon;