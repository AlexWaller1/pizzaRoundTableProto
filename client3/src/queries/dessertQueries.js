import { gql } from "@apollo/client";

const GET_DESSERTS = gql`
  query getDesserts {
    desserts {
      id
      name
      description
      image
      price
    }
  }
`;

const GET_DESSERT = gql`
  query getDessert($id: ID!) {
    dessert(id: $id) {
      id
      name
      description
      image
      price
    }
  }
`;

export { GET_DESSERTS };
export { GET_DESSERT };
