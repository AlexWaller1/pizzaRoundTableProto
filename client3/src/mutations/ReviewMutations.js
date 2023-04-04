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

export { ADD_REVIEW };
