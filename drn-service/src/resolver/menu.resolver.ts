import { Resolver, Query } from '@nestjs/graphql';
import { MenuService } from 'src/service/menu.service';
import { GetAllMenu } from 'src/basics/types/menu.types';

@Resolver()
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}
  @Query(() => GetAllMenu)
  getAllMenu() {
    return this.menuService.getAllMenu();
  }
}
