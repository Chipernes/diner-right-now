import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { GetAllUsers } from '../basics/types/uset.types';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => GetAllUsers)
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
