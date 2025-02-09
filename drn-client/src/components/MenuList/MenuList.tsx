import MenuItem from '../MenuItem/MenuItem';
import { FC } from 'react';
import { MenuItemPropsType } from '../MenuItem/MenuItem.types';
import useMenuList from './MenuList.hook';

const MenuList: FC<{ dishes: MenuItemPropsType[] }> = ({ dishes }) => {
  const { groupedAllMenu } = useMenuList();

  return (
    <div className="rounded-2xl border overflow-hidden">
      {Object.entries(groupedAllMenu).map(([type, items]) => (
        <div key={type}>
            {items.map((menu, index) => (
              <div key={ index }>
                <h2 className="font-bold text-xl p-4 text-center border-b bg-gray-100">{ menu.title }</h2>
                {dishes.map((dish) => (
                  <div key={dish._id}>
                    {dish.menuId?._id === menu._id &&
                        <MenuItem
                            title={dish.title}
                            description={dish.description}
                            price={dish.price}
                            weight={dish.weight}
                            picture={dish.picture}
                            likes={dish.likes}
                        />}
                  </div>

                ))}
              </div>
            ))}
        </div>
        ))
      }
    </div>
  );
};

export default MenuList;
