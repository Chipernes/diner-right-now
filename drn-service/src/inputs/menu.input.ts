import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('MenuInput')
export class MenuInput {
  constructor(props?: Partial<MenuInput>) {
    Object.assign(this, props || {});
  }

  @IsString()
  @Field(() => String)
  title: string;

  @IsString()
  @Field(() => String)
  type: string;
}
