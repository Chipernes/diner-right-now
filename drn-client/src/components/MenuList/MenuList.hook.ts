import useGetAllMenu from '../../basics/graphql/queries/getAllMenu';
import { Menu } from '../../generated/graphql.types';
import { GroupedMenu } from '../../basics/types/common.types';


const useMenuList = () => {
  const { data: allMenu } = useGetAllMenu();

  const groupedAllMenu: GroupedMenu = allMenu.reduce((acc: GroupedMenu, item: Menu) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return {
    groupedAllMenu
  };
};

export default useMenuList;
