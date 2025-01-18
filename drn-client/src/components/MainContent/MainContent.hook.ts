import useGetAllUsers from '../../basics/graphql/queries/getAllUsers';


const useMainContent = () => {
  const { data, count } = useGetAllUsers();

  return {
    data,
    count,
  }
};

export default useMainContent;
