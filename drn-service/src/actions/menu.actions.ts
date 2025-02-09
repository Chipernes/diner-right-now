import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from 'src/entities/menu.entity';
import { MenuInput } from 'src/inputs/menu.input';
import { UpdateMenuInput } from 'src/inputs/update-menu.input';

@Injectable()
export class MenuActions {
  constructor(
    @InjectModel(Menu.name)
    private readonly MenuModel: Model<Menu>,
  ) {}

  async findAllMenus() {
    try {
      const menu = await this.MenuModel.find();
      return { menu };
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot find all menus',
          name: 'findAllMenus',
          originalError: error,
        },
        'findAllMenus',
      );
    }
  }

  async createMenu(createMenuInput: MenuInput) {
    try {
      const menu = new this.MenuModel({
        ...createMenuInput,
      });

      return (await menu.save());
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot create menu',
          name: 'createMenu',
          originalError: error,
          params: { createMenuInput },
        },
        'createMenu',
      );
    }
  }

  async findMenusById(id: string) {
    try {
      const menu = await this.MenuModel
        .findOne({ _id: id })
        .exec();

      return menu;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find menu by id ${id}`,
          name: 'findMenusById',
          originalError: error,
          params: { id },
        },
        'findMenusById',
      );
    }
  }

  async updateMenuById(id: string, updateMenuInput: UpdateMenuInput) {
    const menu = await this.findMenusById(id);

    try {
      Object.assign(menu, updateMenuInput);
      return (await menu.save());
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and update the menu ${id}`,
          name: 'updateMenuById',
          params: { id, updateMenuInput },
        },
        'updateMenuById',
      );
    }
  }

  async removeMenuById(id: string) {
    const menu = await this.findMenusById(id);

    try {
      await menu.deleteOne();
      return menu;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and delete the menu ${id}`,
          name: 'removeMenuById',
          originalError: error,
          params: { id },
        },
        'removeMenuById',
      );
    }
  }
}
