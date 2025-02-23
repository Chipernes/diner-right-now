import { Menu } from '../../generated/graphql.types';

export type GroupedMenu = {
  [key: string]: Menu[];
};

export type MutationReturnType<T> = {
  data: T | null;
  error: string | null;
};
