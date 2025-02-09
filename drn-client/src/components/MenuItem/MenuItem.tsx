import { FC } from 'react';
import { MenuItemPropsType } from './MenuItem.types';

const MenuItem: FC<MenuItemPropsType> = ({
  title,
  description,
  price,
  weight,
  picture,
  likes,
}) => (
  <div className="p-4 flex border-b last:border-0 py-4">
    <div className="flex-grow">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-red-500 font-bold mb-2">{price} UAH</p>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="text-xs text-gray-500 mt-2">
        <span>{weight}г</span>
      </div>
      <button className="text-gray-500 hover:text-red-500 mt-2">
        ❤️ {likes}
      </button>
    </div>
    <img
      src={picture}
      alt={title}
      className="w-36 h-28 object-cover rounded-md mr-4"
    />
  </div>
);

export default MenuItem;
