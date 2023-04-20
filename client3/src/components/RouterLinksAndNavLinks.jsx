import React, { useState } from 'react'
import RouterLinks from './RouterLinks'
import NavLinks from './NavLinks'
import { useMutation } from '@apollo/client';
import { ADD_CART, DELETE_CART } from '../mutations/cartMutations';
import { GET_CARTS } from '../queries/cartQueries';


export default function RouterLinksAndNavLinks() {
    
    const [cartId, setCartId] = useState("");
    const [itemId, setItemId] = useState("");
    const [newName, setNewName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const [addToCart] = useMutation(ADD_CART, {
        variables: { itemId, newName, description, image, price},
        update (cache, { data: { addToCart } }) {
            const { carts } = cache.readQuery({ query: GET_CARTS });
            cache.writeQuery({
                query: GET_CARTS,
                data: { carts: [...carts, addToCart] }
            });
        }
    })

    const [deleteFromCart] = useMutation(DELETE_CART, {
        variables: { cartId },
        refetchQueries: [{ query: GET_CARTS }]
    })

    const [cart, setCart] = useState([]);
    
    let addCartItem = (item) => {
      setItemId(item.id);
      setNewName(item.name);
      setDescription(item.description);
      setImage(item.image);
      setPrice(item.price);

      addToCart(itemId, newName, description, image, price);
    }
  
    let deleteCartItem = (id) => {
  
      setCartId(id);
  
      deleteFromCart(cartId);
    }
  
  return (
    <>
      
      <NavLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
      <RouterLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
    </>
  )
}
