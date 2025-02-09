import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { MenuService } from 'src/service/menu.service';
import { GetAllMenu } from 'src/basics/types/menu.types';
import { Menu } from 'src/entities/menu.entity';
import { MenuInput } from 'src/inputs/menu.input';
import { UpdateMenuInput } from 'src/inputs/update-menu.input';

export const returnMenu = () => Menu;

@Resolver()
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}
  @Query(() => GetAllMenu)
  getAllMenu() {
    return this.menuService.findAll();
  }

  @Mutation(returnMenu)
  createMenu(
    @Args('createMenuInput')
      createMenuInput: MenuInput,
  ) {
    return this.menuService.create(createMenuInput);
  }

  @Mutation(returnMenu)
  updateMenu(
    @Args('id') id: string,
    @Args('updateMenuInput')
      updateMenuInput: UpdateMenuInput,
  ) {
    return this.menuService.update(id, updateMenuInput);
  }

  @Mutation(returnMenu)
  removeMenu(
    @Args('id', { type: () => String })
      id: string
  ) {
    return this.menuService.remove(id);
  }
}
