import React, { useState } from 'react'
import RouterLinks from './RouterLinks'
import NavLinks from './NavLinks'
import { useMutation } from '@apollo/client';
import { ADD_CART, DELETE_CART } from '../mutations/cartMutations';
import { GET_CARTS } from '../queries/cartQueries';
import { useNavigate } from 'react-router-dom';


export default function RouterLinksAndNavLinks() {
    
    const navigate = useNavigate()

    const [id, setCartId] = useState("");
    const [itemId, setItemId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    

 
    let addCartItem = (item) => {
      setItemId(item.id);
      setName(item.name);
      setDescription(item.description);
      setImage(item.image);
      setPrice(item.price);
       
      if(itemId, name, description, image, price){
          addToCart(itemId, name, description, image, price)
      }

            
            
        }

        
      

        
       const [addToCart] = useMutation(ADD_CART, {
            variables: { itemId, name, description, image, price },
            update (cache, { data: { addToCart } }) {
                const { carts } = cache.readQuery({ query: GET_CARTS });
                cache.writeQuery({
                query: GET_CARTS,
                data: { carts: [...carts, addToCart] }
            });
        }
    })
    
    const [deleteFromCart] = useMutation(DELETE_CART, {
        
        variables: { id },
        onCompleted: navigate("/cart"),
        refetchQueries: [{ query: GET_CARTS }]
    })
    
    const [cart, setCart] = useState([]);
    
    
    let deleteCartItem = (cartId) => {
  
     setCartId(cartId);

     if (id) {
        deleteFromCart(cartId);
     }
    }
  
  return (
    <>
      
      <NavLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
      <RouterLinks cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>
    </>
  )
}
