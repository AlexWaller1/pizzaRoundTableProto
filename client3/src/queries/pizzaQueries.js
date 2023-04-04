import { gql } from "@apollo/client";

const GET_PIZZAS = gql`
  query getPizzas {
    pizzas {
      id
      name
      description
      image
      price
    }
  }
`;

const GET_PIZZA = gql`
  query getPizza($id: ID!) {
    pizza(id: $id) {
      id
      name
      description
      image
      price
    }
  }
`;

export { GET_PIZZAS };
export { GET_PIZZA };
