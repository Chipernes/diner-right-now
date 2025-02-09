import { InputType, PartialType } from '@nestjs/graphql';
import { MenuInput } from 'src/inputs/menu.input';

@InputType('UpdateMenuInput')
export class UpdateMenuInput extends PartialType(MenuInput) {}
