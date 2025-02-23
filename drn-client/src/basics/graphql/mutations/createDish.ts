import { gql, MutationResult, useMutation } from '@apollo/client';
import { Dish, DishInput } from '../../../generated/graphql.types';
import { MutationReturnType } from '../../types/common.types';

const CREATE_DISH = gql`
  mutation CreateDish($createDishInput: DishInput!) {
  createDish(createDishInput: $createDishInput) {
    title
  }
}
`;

type ResultType = {
  createDish: Dish;
};

type UseCreateDish = [
  (
    dish: Partial<Dish>,
  ) => Promise<MutationReturnType<Dish>>,
  MutationResult<ResultType>,
];

const useCreateDish = (): [((dish: DishInput) => Promise<{
  data: Dish | null;
  error: null
}>), MutationResult<ResultType>] => {
  const [createDish, state] = useMutation<ResultType>(CREATE_DISH);

  const executeMutation = async (dish: DishInput) => {
    const { data } = await createDish({
      variables: {
        createDishInput: dish,
      },
    });

    return { data: data?.createDish || null, error: null };
  };



  return [executeMutation, state];
};

export default useCreateDish;
