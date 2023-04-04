import { gql } from "@apollo/client";

const ADD_BEVERAGE = gql`
  mutation AddBeverage(
    $name: String!
    $description: description
    $image: String!
    $price: String!
  ) {
    addBeverage(
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

export { ADD_BEVERAGE };
