import React from 'react'
import RouterLinks from './RouterLinks'
import NavLinks from './NavLinks'


export default function RouterLinksAndNavLinks() {
    const [cart, setCart] = useState([]);

    let addCartItem = (item) => {
      let cartId = { cartId: useId() };
  
      let cartItem = { ...cartId, ...item };
  
      let newCart = [...cart, ...cartItem];
  
      setCart(newCart);
    }
  
    let deleteCartItem = (id) => {
  
      let newCart = cart.filter(item => {
          item.cartId !== id
      })
  
      setCart(newCart);
    }
  
  return (
    <>
      <RouterLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
      <NavLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
    </>
  )
}
