import { Field, ObjectType } from '@nestjs/graphql';
import { Menu } from 'src/entities/menu.entity';

@ObjectType('GetAllMenu')
export class GetAllMenu {
  @Field(() => [Menu])
  menu: [Menu];
}
