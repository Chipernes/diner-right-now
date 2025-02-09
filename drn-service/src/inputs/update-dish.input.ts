import { InputType, PartialType } from '@nestjs/graphql';
import { DishInput } from 'src/inputs/dish.input';

@InputType('UpdateDishInput')
export class UpdateDishInput extends PartialType(DishInput) {}
