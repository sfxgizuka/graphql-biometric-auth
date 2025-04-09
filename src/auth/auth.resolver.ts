import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { BiometricLoginInput } from './dto/biometric-login.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('input') input: LoginInput) {
    const token = await this.authService.login(input.email, input.password);
    return token.accessToken;
  }

  @Mutation(() => String)
  async biometricLogin(@Args('input') input: BiometricLoginInput) {
    const token = await this.authService.biometricLogin(input.biometricKey);
    return token.accessToken;
  }
}
