import { Injectable } from '@nestjs/common';
import { DishActions } from 'src/actions/dish.actions';
import { DishInput } from 'src/inputs/dish.input';
import { UpdateDishInput } from 'src/inputs/update-dish.input';

@Injectable()
export class DishService {
  constructor(
    private readonly actions: DishActions,
  ) {}

  public async findAll() {
    try {
      return this.actions.findAllDishes();
    } catch (error) {
      return null;
    }
  }

  public async create(createDishInput: DishInput) {
    try {
      return this.actions.createDish(createDishInput);
    } catch (error) {
      return null;
    }
  }

  async update(id: string, updateDishInput: UpdateDishInput) {
    try {
      return (await this.actions.updateDishById(id, updateDishInput));
    } catch (error) {
      return null;
    }
  }

  public async remove(id: string) {
    try {
      return this.actions.removeDishById(id);
    } catch (error) {
      return null;
    }
  }
}
