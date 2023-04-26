import React, { useState, useEffect } from 'react'
import RouterLinks from './RouterLinks'
import NavLinks from './NavLinks'
import { useMutation } from '@apollo/client';
import { ADD_CART } from '../mutations/cartMutations';
import { GET_CARTS } from '../queries/cartQueries';

export default function RouterLinksAndNavLinks() {

    const [itemId, setItemId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    let [changer, setChanger] = useState(false);

    useEffect(() => {
      if (itemId, name, description, image, price) {
        addToCart(itemId, name, description, image, price);
        console.log("item added to cart!");
      }
    }, [changer]);
    
    let addCartItem = (item) => {
      console.log("clicked!!!");
      setItemId(item.id);
      setName(item.name);
      setDescription(item.description);
      setImage(item.image);
      setPrice(item.price);
      changer = !changer;
      setChanger(changer);
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
    
    return (
      <>
        <NavLinks  addCartItem={ addCartItem } />
        <RouterLinks addCartItem={ addCartItem }/>
      </>
  )
}
