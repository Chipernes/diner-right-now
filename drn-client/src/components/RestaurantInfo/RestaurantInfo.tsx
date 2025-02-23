import { RestaurantInfoPropsType } from './RestaurantInfo.types';
import { FC } from 'react';

const RestaurantInfo: FC<RestaurantInfoPropsType> = ({
    workingHours,
    address,
    phone,
    buttonText,
    buttonColor = 'red-800',
}) => (
  <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <h3 className="font-bold text-2xl mb-4 text-gray-800">Інформація про заклад</h3>
      <p className="text-lg mb-2 text-gray-700">
          <strong>Робочий час:</strong> {workingHours}
      </p>
      <p className="text-lg mb-2 text-gray-700">
          <strong>Адреса:</strong> {address}
      </p>
      <p className="text-lg mb-4 text-gray-700">
          <strong>Телефон:</strong> {phone}
      </p>
    {buttonText &&
        <button className={`mt-4 bg-${buttonColor} text-white py-2 px-6 rounded-full transition-colors duration-300`}>
          {buttonText}
        </button>
    }

  </div>
);

export default RestaurantInfo;
