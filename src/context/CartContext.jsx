import React, { Children } from 'react'
export const CartContext = React.createContext([]);

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider value='Pablo'>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider