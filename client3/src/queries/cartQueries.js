import { gql } from "@apollo/client";

const GET_CARTS = gql`
  query getCarts {
    carts {
      id
      itemId
      name
      description
      image
      price
    }
  }
`;

export { GET_CARTS };
