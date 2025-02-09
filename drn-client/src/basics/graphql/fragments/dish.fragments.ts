import { gql } from '@apollo/client';

export const getAllDishesFragment = gql`
  fragment AllDishesFragment on GetAllDishes {
    dishes {
      _id,
      title,
      description,
      price,
      weight,
      picture,
      likes,
      isHidden,
      menuId {
        _id
      }
    }
  }
`;
