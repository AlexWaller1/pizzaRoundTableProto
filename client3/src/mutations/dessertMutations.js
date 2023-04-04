import { gql } from "@apollo/client";

const ADD_DESSERT = gql`
  mutation AddDessert(
    $name: String!
    $description: String!
    $image: String!
    $price: String!
  ) {
    addDessert(
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

const UPDATE_DESSERT = gql`
  mutation UpdateDessert(
    $id: ID!
    $name: String!
    $description: String!
    $image: String!
    $price: String!
  ) {
    updateDessert(
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

export { ADD_DESSERT };
export { UPDATE_DESSERT };
