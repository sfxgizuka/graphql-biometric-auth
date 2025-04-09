import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { RegisterUserInput } from './dto/register-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  healthCheck(): string {
    return 'OK';
  }

  @Mutation(() => User)
  async register(@Args('input') input: RegisterUserInput): Promise<User> {
    return this.userService.register(input);
  }
}
