import React from "react";

import { connect } from 'react-redux'

import { removeItem, increaseQuantity, decreaseQuantity } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, dispatch}) => {
  const {id, name, imageUrl, price, quantity} = cartItem



  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt="item"/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className={`arrow arrow-${quantity === 1 ? 'disable' : ''}`}
          onClick={() => dispatch(decreaseQuantity(id))}
        >&#10094;</div>
        <span className='value'>{quantity}</span>
        <span
          className='arrow'
          onClick={() => dispatch(increaseQuantity(id))}
        >&#10095;</span>
      </span>
      <span className='price'>${price}</span>
      <span className='remove-button' onClick={() => dispatch(removeItem(id))}>&#10005;</span>
    </div>
  )
}

export default connect(null)(CheckoutItem)
