import { gql } from "@apollo/client";

const ADD_PIZZA = gql`
  mutation AddPizza(
    $name: String!
    $description: String!
    $status: PizzaStatus!
    $businessPartnerId: ID!
  ) {
    addPizza(
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

const UPDATE_PIZZA = gql`
  mutation AddPizza(
    $id: ID!
    $name: String!
    $description: String!
    $image: String!
    $price: String!
  ) {
    updatePizza(
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

const DELETE_PIZZA = gql`
  mutation DeletePizza($id: ID!) {
    deletePizza(id: $id) {
      id
    }
  }
`;

export { ADD_PIZZA, UPDATE_PIZZA, DELETE_PIZZA };
