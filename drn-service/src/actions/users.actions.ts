import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/users.entity';

@Injectable()
export class UserActions {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<User>,
  ) {}

  async getAllUsers() {
    const users = await this.UserModel.find();
    const count = await this.UserModel.countDocuments();

    return { users, count };
  }
}
