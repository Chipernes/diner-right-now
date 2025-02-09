import { useMemo } from 'react';
import useGetAllDishes from '../../../basics/graphql/queries/getAllDishes';


const useHome = () => {
  const { data: dishes } = useGetAllDishes();

  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);

  console.log(urlParams.get('id'));


  return {
    dishes
  }
};

export default useHome;
