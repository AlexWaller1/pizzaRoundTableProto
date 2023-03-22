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
      status: $status
      businessPartnerId: $businessPartnerId
    ) {
      id
      name
      description
      status
      businessPartner {
        id
        name
        email
        phone
      }
    }
  }
`;

const UPDATE_PIZZA = gql`
  mutation AddPizza(
    $id: ID!
    $name: String!
    $description: String!
    $status: PizzaStatusUpdate!
  ) {
    updatePizza(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      businessPartner {
        id
        name
        email
        phone
      }
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
