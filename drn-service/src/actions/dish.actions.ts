import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from 'src/entities/dish.entity';
import { DishInput } from 'src/inputs/dish.input';
import { UpdateDishInput } from 'src/inputs/update-dish.input';

@Injectable()
export class DishActions {
  constructor(
    @InjectModel(Dish.name)
    private readonly DishModel: Model<Dish>,
  ) {}

  async findAllDishes() {
    try {
      const dishes = await this.DishModel.find();
      return { dishes };
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot find all dishes',
          name: 'findAllDishes',
          originalError: error,
        },
        'findAllDishes',
      );
    }
  }

  async createDish(createDishInput: DishInput) {
    try {
      const dish = new this.DishModel({
        ...createDishInput,
      });

      return (await dish.save());
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: 'Cannot create dish',
          name: 'createDish',
          originalError: error,
          params: { createDishInput },
        },
        'createDish',
      );
    }
  }

  async findDishById(id: string) {
    try {
      const dish = await this.DishModel
        .findOne({ _id: id })
        .exec();

      return dish;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find dish by id ${id}`,
          name: 'findDishById',
          originalError: error,
          params: { id },
        },
        'findDishById',
      );
    }
  }

  async updateDishById(id: string, updateDishInput: UpdateDishInput) {
    try {
      const dish = this.DishModel.findOneAndUpdate(
        { _id: id },
        updateDishInput,
        { new: true }
      ).exec();

      return dish;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and update the dish ${id}`,
          name: 'updateDishById',
          params: { id, updateDishInput },
        },
        'updateDishById',
      );
    }
  }

  async removeDishById(id: string) {
    try {
      const dish = this.DishModel.findOneAndDelete(
        { _id: id },
      )

      return dish;
    } catch (error) {
      throw new InternalServerErrorException(
        {
          code: 500,
          message: `Cannot find and delete the dish ${id}`,
          name: 'removeDishById',
          originalError: error,
          params: { id },
        },
        'removeDishById',
      );
    }
  }
}
