import { gql } from "@apollo/client";

const GET_PIZZAS = gql`
  query getPizzas {
    pizzas {
      id
      name
      status
    }
  }
`;

const GET_PIZZA = gql`
  query getPizza($id: ID!) {
    pizza(id: $id) {
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

export { GET_PIZZAS };
export { GET_PIZZA };
