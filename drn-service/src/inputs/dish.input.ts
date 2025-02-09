import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType('DishInput')
export class DishInput {
  constructor(props?: Partial<DishInput>) {
    Object.assign(this, props || {});
  }

  @IsString()
  @Field(() => String)
  menu: string;

  @IsString()
  @Field(() => String)
  title: string;

  @IsString()
  @Field(() => String)
  description: string;

  @IsNumber()
  @Field(() => Number)
  price: number;

  @IsNumber()
  @Field(() => Number)
  weight: number;

  @IsString()
  @Field(() => String)
  picture: string;

  @IsNumber()
  @Field(() => Number)
  likes: number;

  @IsBoolean()
  @Field(() => Boolean)
  isHidden: boolean;
}
