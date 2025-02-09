import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from 'src/entities/dish.entity';

@Injectable()
export class DishActions {
  constructor(
    @InjectModel(Dish.name)
    private readonly DishModel: Model<Dish>,
  ) {}

  async getAllDishes() {
    const dishes = await this.DishModel.find();
    return { dishes };
  }
}
