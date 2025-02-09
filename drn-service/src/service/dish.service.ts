import { Injectable } from '@nestjs/common';
import { DishActions } from 'src/actions/dish.actions';

@Injectable()
export class DishService {
  constructor(
    private readonly actions: DishActions,
  ) {}

  public async getAllDishes() {
    return this.actions.getAllDishes();
  }
}
