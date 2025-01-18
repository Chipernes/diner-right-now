import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/users.entity';

import { Connection } from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
import {UsersResolver} from './resolver/users.resolver';
import {UserService} from './service/user.service';
import {UserActions} from './actions/users.actions';

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
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ])
  ],
  providers: [
    ConfigService,
    UsersResolver, UserService, UserActions,
  ],
})
export class ApiModule {}
