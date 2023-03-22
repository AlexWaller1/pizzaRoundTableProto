import { gql } from "@apollo/client";

const GET_BUSINESS_PARTNERS = gql`
  query getBusinessPartners {
    businessPartners {
      id
      name
      email
      phone
    }
  }
`;

export { GET_BUSINESS_PARTNERS };
