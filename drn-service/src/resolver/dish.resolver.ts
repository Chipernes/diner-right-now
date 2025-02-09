import { Resolver, Query } from '@nestjs/graphql';
import { DishService } from 'src/service/dish.service';
import { GetAllDishes } from 'src/basics/types/dish.types';

@Resolver()
export class DishResolver {
  constructor(private readonly dishService: DishService) {}
  @Query(() => GetAllDishes)
  getAllDishes() {
    return this.dishService.getAllDishes();
  }
}
