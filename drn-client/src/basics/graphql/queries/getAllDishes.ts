import { ApolloError, gql, useQuery } from '@apollo/client';
import { getAllDishesFragment } from '../fragments/dish.fragments';
import { Dish } from '../../../generated/graphql.types';

const GET_ALL_DISHES = gql`
  query GetAllDishes {
    getAllDishes {
      ...AllDishesFragment
    }
  }
  ${getAllDishesFragment}
`;

type ResultType = {
  getAllDishes: {
    dishes: Dish[];
  };
};

type UseGetAllDishes = () => {
  loading: boolean;
  error?: ApolloError;
  data: Dish[];
};

const useGetAllDishes: UseGetAllDishes = () => {
  const { data, loading, error } = useQuery<ResultType>(GET_ALL_DISHES);

  return {
    data: data?.getAllDishes.dishes || [],
    loading,
    error,
  };
};

export default useGetAllDishes;
