import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser {
    user {
      id
      first_name
      last_name
      age
      dob
      email
      contact_number
      gender
      user_role {
        role
        id
      }
      user_status {
        status
        id
      }
    }
  }
`;

export const GET_USER_BY_ROLE_AND_STATUS = gql`
  query getUserByRoleAndStatus($role: String!, $status: String!) {
    user(
      where: {
        user_role: { role: { _eq: $role } }
        user_status: { status: { _eq: $status } }
      }
    ) {
      id
      first_name
      last_name
      age
      dob
      email
      contact_number
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

export const GET_USER_BY_ID = gql`
  query getUserById($id: uuid!) {
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
  query getUserRoleAndStatus {
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
  mutation CreateUser($input: user_insert_input!) {
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
  }
`;

export const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo(
    $id: uuid!
    $first_name: name!
    $last_name: name!
    $age: Int
    $dob: date!
    $email: String!
    $contact_number: String!
    $gender: String!
    $role_id: uuid!
    $status_id: uuid!
  ) {
    update_user(
      where: { id: { _eq: $id } }
      _set: {
        first_name: $first_name
        last_name: $last_name
        age: $age
        dob: $dob
        email: $email
        contact_number: $contact_number
        gender: $gender
        role_id: $role_id
        status_id: $status_id
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($id: uuid!) {
    delete_user_by_pk(id: $id) {
      first_name
      last_name
    }
  }
`;
