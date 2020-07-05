import React from "react";
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { withRouter } from 'react-router-dom'

import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cart-item/cart-item.componet'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {

  const itemsList = cartItems.length
    ? cartItems.map(item => <CartItem item={item} key={item.id}/>)
    : <span className='empty-cart'>Empty</span>

  const goToCheckoutPage = () => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }

  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {itemsList}
      </div>
      <CustomButton onClick={goToCheckoutPage}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
