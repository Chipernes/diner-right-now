import { Injectable } from '@nestjs/common';
import { UserActions } from '../actions/users.actions';

@Injectable()
export class UserService {
  constructor(
    private readonly actions: UserActions,
  ) {}

  public async getAllUsers() {
    return this.actions.getAllUsers();
  }
}
