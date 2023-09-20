import { gql } from "@apollo/client";

export const GET_USER = gql`
  query MyQuery {
    user {
      id
      first_name
      last_name
      user_role {
        role
      }
      user_status {
        status
      }
    }
  }
`;

export const GET_USER_BY_ROLE_ID_AND_STATUS_ID = gql`
  query MyQuery($roleID: String!, $statusID: String!) {
    user(where: { role_id: { _eq: $roleID }, status_id: { _eq: $statusID } }) {
      first_name
      last_name
      id
      user_role {
        role
      }
      user_status {
        status
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query MyQuery($id: uuid!) {
    user_by_pk(id: $id) {
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
  }
`;

export const GET_USER_ROLE_AND_STATUS = gql`
  query MyQuery {
    user_role {
      id
      role
    }
    user_status {
      id
      status
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $input: user_insert_input!
    $userRoleInput: user_role_insert_input!
  ) {
    insert_user_one(object: $input) {
      first_name
      last_name
      dob
      age
      contact_number
      email
      gender
      role_id
      status_id
    }
    insert_user_role_one(object: $userRoleInput) {
      role
    }
  }
`;

export const UPDATE_NAME = gql`
  mutation UpdateName($id: uuid!, $first_name: name!, $last_name: name!) {
    update_user(
      where: { id: { _eq: $id } }
      _set: { first_name: $first_name, last_name: $last_name }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_USER_BY_ID = gql`
  mutation MyMutation($id: uuid!) {
    delete_user_by_pk(id: $id) {
      first_name
      last_name
    }
  }
`;
