import { gql } from "@apollo/client";

const ADD_CART = gql`
  mutation AddCart(
    $itemId: String!
    $name: String!
    $description: String!
    $image: String!
    $price: String!
  ) {
    addCart(
      itemId: $itemId
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      id
      itemId
      name
      description
      image
      price
    }
  }
`;

const DELETE_CART = gql`
  mutation DeleteCart($id: ID!) {
    deleteCart(id: $id) {
      id
    }
  }
`;

const DELETE_CARTS = gql`
  mutation DeleteCarts {
    deleteCarts {
      id
    }
  }
`;

export { ADD_CART };
export { DELETE_CART };
export { DELETE_CARTS };
