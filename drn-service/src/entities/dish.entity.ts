import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Menu } from 'src/entities/menu.entity';

@Schema()
@ObjectType('Dish')
export class Dish extends Document {
  constructor(props: Partial<Dish>) {
    super();
    Object.assign(this, props);
  }

  @Field(() => ID)
  _id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Menu.name })
  @Field(() => Menu)
  menu: string;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  description: string;

  @Prop()
  @Field(() => Number)
  price: number;

  @Prop()
  @Field(() => Number)
  weight: number;

  @Prop()
  @Field(() => String)
  picture: string;

  @Prop()
  @Field(() => Number)
  likes: number;

  @Prop()
  @Field(() => Boolean)
  isHidden: boolean;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
