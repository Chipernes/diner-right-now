import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DishService } from 'src/service/dish.service';
import { GetAllDishes } from 'src/basics/types/dish.types';
import { Dish } from 'src/entities/dish.entity';
import { DishInput } from 'src/inputs/dish.input';
import { UpdateDishInput } from 'src/inputs/update-dish.input';

export const returnDish = () => Dish;

@Resolver()
export class DishResolver {
  constructor(private readonly dishService: DishService) {}

  @Query(() => GetAllDishes)
  getAllDishes() {
    return this.dishService.findAll();
  }

  @Mutation(returnDish)
  createDish(
    @Args('createDishInput')
      createDishInput: DishInput,
  ) {
    return this.dishService.create(createDishInput);
  }

  @Mutation(returnDish)
  updateDish(
    @Args('id') id: string,
    @Args('updateDishInput')
      updateDishInput: UpdateDishInput,
  ) {
    return this.dishService.update(id, updateDishInput);
  }

  @Mutation(returnDish)
  removeDish(
    @Args('id', { type: () => String })
      id: string
  ) {
    return this.dishService.remove(id);
  }
}
