import { gql } from "@apollo/client";

export const GET_USER = gql`
  query MyQuery {
    user {
      id
      first_name
      last_name
    }
  }
`;
