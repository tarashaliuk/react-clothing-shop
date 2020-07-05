export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)
  if (existingCartItem) {
    return cartItems.map(item => item.id === cartItemToAdd.id
      ? {...item, quantity: item.quantity + 1}
      : item)
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemIdToRemove) => {
  return cartItems.filter(item => item.id !== cartItemIdToRemove)
}

export const increaseQuantity = (cartItems, cartItemId) => {
  return cartItems.map(item => item.id === cartItemId
    ? {...item, quantity: item.quantity + 1}
    : item
  )
}

export const decreaseQuantity = (cartItems, cartItemId) => {
  return cartItems.map(item => item.id === cartItemId && item.quantity > 1
    ? {...item, quantity: item.quantity - 1}
    : item
  )
}
