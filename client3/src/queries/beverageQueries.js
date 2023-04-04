import { gql } from "graphql";

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

export { GET_BEVERAGES };
