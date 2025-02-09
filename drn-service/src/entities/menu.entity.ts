import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType('Menu')
export class Menu extends Document {
  constructor(props: Partial<Menu>) {
    super();
    Object.assign(this, props);
  }

  @Field(() => ID)
  _id: string;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  type: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
