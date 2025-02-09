import { Field, ObjectType } from '@nestjs/graphql';
import { Dish } from 'src/entities/dish.entity';

@ObjectType('GetAllDishes')
export class GetAllDishes {
  @Field(() => [Dish])
  dishes: [Dish];
}
