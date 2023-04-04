import { gql } from "@apollo/client";

const GET_APPETIZERS = gql`
  query getAppetizers {
    appetizers {
      id
      name
      description
      image
      price
    }
  }
`;

const GET_APPETIZER = gql`
  query getAppetizer($id: ID!) {
    appetizer(id: $id) {
      id
      name
      description
      image
      price
    }
  }
`;

export { GET_APPETIZERS };
export { GET_APPETIZER };
