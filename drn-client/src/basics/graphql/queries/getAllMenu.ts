import { ApolloError, gql, useQuery } from '@apollo/client';
import { Menu } from '../../../generated/graphql.types';
import { getAllMenuFragment } from '../fragments/menu.fragments';

const GET_ALL_MENU = gql`
  query GetAllMenu {
    getAllMenu {
      ...AllMenuFragment
    }
  }
  ${getAllMenuFragment}
`;

type ResultType = {
  getAllMenu: {
    menu: Menu[];
  };
};

type UseGetAllMenu = () => {
  loading: boolean;
  error?: ApolloError;
  data: Menu[];
};

const useGetAllMenu: UseGetAllMenu = () => {
  const { data, loading, error } = useQuery<ResultType>(GET_ALL_MENU);

  return {
    data: data?.getAllMenu.menu || [],
    loading,
    error,
  };
};

export default useGetAllMenu;
