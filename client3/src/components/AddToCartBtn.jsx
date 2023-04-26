import React from 'react';
import { ADD_CART } from '../mutations/cartMutations';
import { useMutation } from '@apollo/client';
import { GET_CARTS } from '../queries/cartQueries';

export default function AddToCartBtn({ item }) {
  console.log(item);
  const [addToCart] = useMutation(ADD_CART, {
    variables: { itemId: item.id, name: item.name, description: item.description, image: item.image, price: item.price },
    update (cache, { data: { addToCart} }) {
        const { carts } = cache.readQuery({ query: GET_CARTS });
        cache.writeQuery({
            query: GET_CARTS,
            data: { carts: [...carts, addToCart] }
        });
    }
  })
  return (
    <button id="add-to-cart-btn" className='btn btn-dark' onClick={() => addToCart(item.id, item.name, item.description, item.image, item.price) }>
        Add To Cart
    </button>
  )
}
