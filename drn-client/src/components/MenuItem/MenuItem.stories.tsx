import { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";
import "../../index.css";

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    price: { control: "number" },
    weight: { control: "number" },
    likes: { control: "number" },
    title: { control: "text" },
    description: { control: "text" },
    picture: { control: "text" },
  },
} satisfies Meta<typeof MenuItem>;
export default meta;

export const FirstMenu: StoryObj<typeof MenuItem> = {
  args: {
    title: "Вегеторія",
    description: "На томатному соусі з печерицями, артишоками, баклажанами, цукіні, болгарським перцем-гриль, маслинами, міксом салатів, соусом песто та фісташками",
    price: 220,
    weight: 470,
    picture: "https://cdn-media.choiceqr.com/prod-eat-mario2/menu/FYKFtuC-bJXfPHG-IRsEDeh.webp",
    likes: 23,
  }
};

export const SecondMenu: StoryObj<typeof MenuItem> = {
  args: {
    title: "Маргарита",
    description: "На томатному соусі з моцарелою, моцарелою в розсолі, томатами та соусом песто",
    price: 190,
    weight: 460,
    picture: "https://cdn-media.choiceqr.com/prod-eat-mario2/menu/TXzGBkj-JbnePtW-fTULGHV.jpeg.webp",
    likes: 13,
  },
};

export const ThirdMenu: StoryObj<typeof MenuItem> = {
  args: {
    title: "Паста з мітболами",
    description: "Паста власного виробництва фетучіні з ніжними мітболами зі свинини, томатами чері та болгарським перцем під томатним соусом. Посипаємо пармезаном та прикрашаємо базиліком",
    price: 209,
    weight: 300,
    picture: "https://cdn-media.choiceqr.com/prod-eat-mario2/menu/KDnoIgl-GXfwwkT-fHbShSA.webp",
    likes: 9,
  },
};
