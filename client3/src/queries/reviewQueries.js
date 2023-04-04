import { gql } from "@apollo/client";

const GET_REVIEWS = gql`
  query getReviews {
    reviews {
      id
      title
      stars
      text
    }
  }
`;

const GET_REVIEW = gql`
  query getReview($id: ID!) {
    review(id: $id) {
      id
      title
      stars
      text
    }
  }
`;

export { GET_REVIEWS };
export { GET_REVIEW };
