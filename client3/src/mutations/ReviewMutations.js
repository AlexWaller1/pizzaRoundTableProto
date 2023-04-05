import { gql } from "@apollo/client";

const ADD_REVIEW = gql`
  mutation AddReview($title: String!, $stars: StarStatus!, $text: String!) {
    addReview(title: $title, stars: $stars, text: $text) {
      title
      stars
      text
    }
  }
`;

const UPDATE_REVIEW = gql`
  mutation UpdateReview(
    $id: ID!
    $title: String!
    $stars: StarStatusUpdate!
    $text: String!
  ) {
    updateReview(id: $id, title: $title, stars: $stars, text: $text) {
      id
      title
      stars
      text
    }
  }
`;

const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id) {
      id
      title
      stars
      text
    }
  }
`;

export { ADD_REVIEW };
export { UPDATE_REVIEW };
export { DELETE_REVIEW };
