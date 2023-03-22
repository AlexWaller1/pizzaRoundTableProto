import { gql } from "@apollo/client";

const ADD_BUSINESS_PARTNER = gql`
  mutation addBusinessPartner(
    $name: String!
    $email: String!
    $phone: String!
  ) {
    addBusinessPartner(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;
const DELETE_BUSINESS_PARTNER = gql`
  mutation deleteBusinessPartner($id: ID!) {
    deleteBusinessPartner(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_BUSINESS_PARTNER, DELETE_BUSINESS_PARTNER };
