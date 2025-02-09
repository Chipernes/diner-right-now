import { Injectable } from '@nestjs/common';
import { MenuActions } from 'src/actions/menu.actions';
import { MenuInput } from 'src/inputs/menu.input';
import { UpdateMenuInput } from 'src/inputs/update-menu.input';

@Injectable()
export class MenuService {
  constructor(
    private readonly actions: MenuActions,
  ) {}

  public async findAll() {
    try {
      return this.actions.findAllMenus();
    } catch (error) {
      return null;
    }
  }

  public async create(createMenuInput: MenuInput) {
    try {
      return this.actions.createMenu(createMenuInput);
    } catch (error) {
      return null;
    }
  }

  async update(id: string, updateMenuInput: UpdateMenuInput) {
    try {
      return (await this.actions.updateMenuById(id, updateMenuInput));
    } catch (error) {
      return null;
    }
  }

  public async remove(id: string) {
    try {
      return this.actions.removeMenuById(id);
    } catch (error) {
      return null;
    }
  }
}
