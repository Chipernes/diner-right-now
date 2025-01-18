import { ApolloError, gql, useQuery } from '@apollo/client';
import { getAllUsersFragment } from '../fragments/user.fragments';
import { User } from 'generated/graphql.types';

const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      ...AllUsersFragment      
    }
  }
  ${getAllUsersFragment}
`;

type ResultType = {
  getAllUsers: {
    users: User[];
    count: number;
  };
};

type UseGetAllUsers = () => {
  loading: boolean;
  error?: ApolloError;
  data: User[];
  count: number;
};

const useGetAllUsers: UseGetAllUsers = () => {
  const { data, loading, error } = useQuery<ResultType>(GET_ALL_USERS);

  return {
    data: data?.getAllUsers.users || [],
    count: data?.getAllUsers.count || 0,
    loading,
    error,
  };
};

export default useGetAllUsers;
