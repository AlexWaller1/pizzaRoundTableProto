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

const DELETE_BEVERAGE = gql`
  mutation DeleteBeverage($id: ID!) {
    deleteBeverage(id: $id) {
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
export { DELETE_BEVERAGE };
