import SidebarMenu from '../../../components/SidebarMenu/SidebarMenu';
import MenuList from '../../../components/MenuList/MenuList';
import RestaurantInfo from '../../../components/RestaurantInfo/RestaurantInfo';
import useHome from './Home.hook';


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
          <RestaurantInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
