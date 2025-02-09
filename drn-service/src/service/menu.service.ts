import { Injectable } from '@nestjs/common';
import { MenuActions } from 'src/actions/menu.actions';

@Injectable()
export class MenuService {
  constructor(
    private readonly actions: MenuActions,
  ) {}

  public async getAllMenu() {
    return this.actions.getAllMenu();
  }
}
