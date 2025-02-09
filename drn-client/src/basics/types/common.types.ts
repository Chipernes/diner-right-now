import { Menu } from '../../generated/graphql.types';

export type GroupedMenu = {
  [key: string]: Menu[];
};
