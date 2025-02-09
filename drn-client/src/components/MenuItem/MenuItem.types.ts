export type MenuItemPropsType = {
  _id?: string,
  title: string,
  description: string,
  price: number,
  weight: number,
  picture: string,
  likes: number,
  menu?: MenuItemType,
};

type MenuItemType = {
  _id: string,
}
