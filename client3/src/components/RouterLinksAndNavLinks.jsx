import React, { useState } from 'react'
import RouterLinks from './RouterLinks'
import NavLinks from './NavLinks'


export default function RouterLinksAndNavLinks() {
    const [cart, setCart] = useState([]);

    const [cartUniqueId, setCartId] = useState(0);
    
    let addCartItem = (item) => {

      let newCartId = cartUniqueId + 1;
      setCartId(newCartId);

      let cartId = { cartId: cartUniqueId };
  
      let cartItem = { ...cartId, ...item };
  
      cart.push(cartItem);

      let newCart = [...cart];
  
      setCart(newCart);

      console.log(cart.length);
      console.log(cart);
    }
  
    let deleteCartItem = (id) => {
  
      let newCart = cart.filter(item => item.cartId !== id);
  
      setCart(newCart);
    }
  
  return (
    <>
      
      <NavLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
      <RouterLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
    </>
  )
}
