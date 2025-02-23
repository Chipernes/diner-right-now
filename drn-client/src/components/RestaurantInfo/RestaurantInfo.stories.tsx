import type { Meta, StoryObj } from '@storybook/react';
import RestaurantInfo from './RestaurantInfo';
import "../../index.css";

const meta: Meta<typeof RestaurantInfo> = {
  title: "Components/RestaurantInfo",
  component: RestaurantInfo,
  argTypes: {
    workingHours: { control: "text" },
    address: { control: "text" },
    phone: { control: "text" },
    buttonText: { control: "text" },
    buttonColor: { control: "text" },
  },
} satisfies Meta<typeof RestaurantInfo>;

export default meta;

export const FirstType: StoryObj<typeof RestaurantInfo> = {
  args: {
    workingHours: "10:00 - 21:45",
    address: "Житомир",
    phone: "+380 00 000 00 00",
    buttonText: "Надіслати відгук",
    buttonColor: "red-500",
  }
};

export const SecondType: StoryObj<typeof RestaurantInfo> = {
  args: {
    workingHours: "8:00 - 23:15",
    address: "Рівне",
    phone: "+380 22 333 44 55",
  },
};

export const ThirdType: StoryObj<typeof RestaurantInfo> = {
  args: {
    workingHours: "9:00 - 22:00",
    address: "Київ",
    phone: "+380 11 222 33 44",
    buttonText: "Залишити відгук",
    buttonColor: "purple-800",
  },
};
