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

const UPDATE_BEVERAGE = gql`
  mutation UpdateBeverage(
    $id: ID!
    $name: String!
    $description: String!
    $image: String!
    $price: String
  ) {
    updateBeverage(
      id: $id
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      id
      name
      description
      image
      price
    }
  }
`;

export { ADD_BEVERAGE };
export { UPDATE_BEVERAGE };
