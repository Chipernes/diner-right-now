import { gql } from '@apollo/client';

export const getAllMenuFragment = gql`
  fragment AllMenuFragment on GetAllMenu {
    menu {
      _id
      title
      type
    }
  }
`;
