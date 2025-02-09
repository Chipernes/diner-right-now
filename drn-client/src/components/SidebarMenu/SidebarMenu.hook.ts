import { useState } from "react";
import useGetAllMenu from "../../basics/graphql/queries/getAllMenu";
import { Menu } from '../../generated/graphql.types';
import { useNavigate } from 'react-router-dom';
import { homeRoute } from '../../basics/constants/routes.constants';
import { GroupedMenu } from '../../basics/types/common.types';

const UseSidebarMenu = () => {
  const navigate = useNavigate();
  const { data: allMenu } = useGetAllMenu();
  const [openType, setOpenType] = useState<string | null>(null);

  const groupedAllMenu: GroupedMenu = allMenu.reduce((acc: GroupedMenu, item: Menu) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  const toggleType = (type: string) => {
    setOpenType((prevType) => (prevType === type ? null : type));
  };

  const handleSelectMenuItem = (item: Menu) => {
    navigate(`${homeRoute}?section=${item.title}`);
  };

  return {
    groupedAllMenu,
    openType,
    toggleType,
    handleSelectMenuItem,
  };
};

export default UseSidebarMenu;
