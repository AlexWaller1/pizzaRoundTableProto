import { gql } from "@apollo/client";

const ADD_APPETIZER = gql`
  mutation AddAppetizer(
    $name: String!
    $description: String!
    $image: String!
    $price: String!
  ) {
    addAppetizer(
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      name
      description
      image
      price
    }
  }
`;

export { ADD_APPETIZER };
