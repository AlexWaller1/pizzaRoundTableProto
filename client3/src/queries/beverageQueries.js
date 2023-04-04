import { gql } from "@apollo/client";

const GET_BEVERAGES = gql`
  query getBeverages {
    beverages {
      id
      name
      description
      image
      price
    }
  }
`;

const GET_BEVERAGE = gql`
  query getBeverage($id: ID!) {
    beverage(id: $id) {
      id
      name
      description
      image
      price
    }
  }
`;

export { GET_BEVERAGES };
export { GET_BEVERAGE };
