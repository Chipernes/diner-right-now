import useSidebarMenu from "./SidebarMenu.hook";
import { useNavigate } from 'react-router-dom';
import { dishCreate } from '../../basics/constants/routes.constants';

const SidebarMenu = () => {
  const {
    groupedAllMenu,
    openType,
    toggleType,
    handleSelectMenuItem,
    handleDishCreate,
  } = useSidebarMenu();

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <h2 className="font-bold mb-4 text-gray-500">Меню:</h2>
      {Object.entries(groupedAllMenu).map(([type, items]) => (
        <div key={type}>
          <button
            className="w-full text-left font-bold text-xl"
            onClick={() => toggleType(type)}
          >
            {type}
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
              openType === type ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4">
              <ul
                className={`ml-4 space-y-1 overflow-hidden transition-all duration-700 ease-in-out ${
                  openType === type ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                {items.map((item, index) => (
                  <li
                    className='cursor-pointer'
                    key={ index }
                    onClick={
                      () => handleSelectMenuItem(item)
                    }
                  >
                    { item.title }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <button onClick={ handleDishCreate } type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Додати страву
      </button>
    </div>
  );
};

export default SidebarMenu;
