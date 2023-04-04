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

const UPDATE_APPETIZER = gql`
  mutation UpdateAppetizer(
    $id: ID!
    $name: String!
    $description: String!
    $image: String!
    $price: String!
  ) {
    updateAppetizer(
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

const DELETE_APPETIZER = gql`
  mutation DeleteAppetizer($id: ID!) {
    deleteAppetizer(id$: id) {
      id
      name
      description
      image
      price
    }
  }
`;

export { ADD_APPETIZER };
export { UPDATE_APPETIZER };
export { DELETE_APPETIZER };
