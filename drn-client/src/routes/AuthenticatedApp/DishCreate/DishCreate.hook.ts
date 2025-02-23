import useCreateDish from '../../../basics/graphql/mutations/createDish';
import useGetAllMenu from '../../../basics/graphql/queries/getAllMenu';
import { useState } from 'react';

const useDishCreate = () => {
  const { data: allMenu } = useGetAllMenu();
  const [executeMutation] = useCreateDish();

  const [dishData, setDishData] = useState({
    menu: "",
    title: "",
    description: "",
    weight: "",
    price: "",
    image: "",
    isHidden: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(value);
    setDishData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCreateDish = async (e: any) => {
    e.preventDefault();
    console.log(dishData);
    /*const customerEngagementPlanningData = await executeMutation(
      dish,
    );*/
  };

  return {
    allMenu,
    handleInputChange,
    handleCreateDish,
  };
};

export default useDishCreate;
