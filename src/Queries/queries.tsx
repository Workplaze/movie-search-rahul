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


export const GET_USER_BY_ID = gql`
query MyQuery($id: uuid!) {
  user_by_pk(id:$id) {
    id
    first_name
    last_name
    dob
    age
    contact_number
    email
    gender
    user_role {
      role
    }
    user_status {
      status
    }
  }
}`;
