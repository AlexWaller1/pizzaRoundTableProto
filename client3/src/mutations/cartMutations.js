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

export { ADD_CART };
