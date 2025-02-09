import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/users.entity';

import { Connection } from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
import {UsersResolver} from './resolver/users.resolver';
import {UserService} from './service/user.service';
import {UserActions} from './actions/users.actions';
import { DishResolver } from 'src/resolver/dish.resolver';
import { DishService } from 'src/service/dish.service';
import { DishActions } from 'src/actions/dish.actions';
import { Dish, DishSchema } from 'src/entities/dish.entity';
import { Menu, MenuSchema } from 'src/entities/menu.entity';
import { MenuActions } from 'src/actions/menu.actions';
import { MenuService } from 'src/service/menu.service';
import { MenuResolver } from 'src/resolver/menu.resolver';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: async (connection: Connection) => {
          const schema = UserSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, { inc_field: 'userId' });
          return schema;
        },
        inject: [getConnectionToken('Database')],
      },
      {
        name: Dish.name,
        useFactory: async (connection: Connection) => {
          const schema = DishSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, { inc_field: 'dishId' });
          return schema;
        },
        inject: [getConnectionToken('Database')],
      },
      {
        name: Menu.name,
        useFactory: async (connection: Connection) => {
          const schema = MenuSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, { inc_field: 'menuId' });
          return schema;
        },
        inject: [getConnectionToken('Database')],
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Dish.name,
        schema: DishSchema,
      },
      {
        name: Menu.name,
        schema: MenuSchema,
      },
    ])
  ],
  providers: [
    ConfigService,
    UsersResolver, UserService, UserActions,
    DishResolver, DishService, DishActions,
    MenuResolver, MenuService, MenuActions,
  ],
})
export class ApiModule {}
