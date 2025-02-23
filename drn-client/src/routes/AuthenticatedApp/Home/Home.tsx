import SidebarMenu from '../../../components/SidebarMenu/SidebarMenu';
import MenuList from '../../../components/MenuList/MenuList';
import RestaurantInfo from '../../../components/RestaurantInfo/RestaurantInfo';
import useHome from './Home.hook';
import CookiePopup from '../../../components/CookiePopup/CookiePopup';


const Home = () => {
  const { dishes } = useHome();

  return (
    <>
      <div className="flex p-5">
        <div className="w-1/4">
          <SidebarMenu />
        </div>
        <div className="w-2/4 mx-3">
          <MenuList dishes={ dishes }/>
        </div>
        <div className="w-1/4">
          <RestaurantInfo
            workingHours='10:00 - 21:45'
            address='Житомир'
            phone='+380 00 000 00 00'
            buttonText='Надіслати відгук'
            buttonColor='red-500'
          />
        </div>
        <CookiePopup />
      </div>
    </>
  );
};

export default Home;
