import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from 'src/entities/menu.entity';

@Injectable()
export class MenuActions {
  constructor(
    @InjectModel(Menu.name)
    private readonly MenuModel: Model<Menu>,
  ) {}

  async getAllMenu() {
    const menu = await this.MenuModel.find();
    return { menu };
  }
}
