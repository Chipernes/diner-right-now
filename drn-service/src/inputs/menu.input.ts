import { Field, InputType } from '@nestjs/graphql';

@InputType('MenuItemInput')
export class MenuInput {
  constructor(props?: Partial<MenuInput>) {
    Object.assign(this, props || {});
  }

  @Field(() => String)
  title: string;

  @Field(() => String)
  type: string;
}
