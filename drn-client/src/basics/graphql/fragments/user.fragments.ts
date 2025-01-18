import { gql } from '@apollo/client';

export const getAllUsersFragment = gql`
  fragment AllUsersFragment on GetAllUsers {
    users {
      name
      email
    }
    count
  }
`;
