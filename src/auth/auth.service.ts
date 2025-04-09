import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    return {
      accessToken: this.jwtService.sign({ sub: user.id, email: user.email }),
    };
  }

  async biometricLogin(biometricKey: string) {
    const user = await this.userService.findByBiometricKey(biometricKey);
    if (!user) throw new UnauthorizedException('Biometric authentication failed');

    return {
      accessToken: this.jwtService.sign({ sub: user.id, email: user.email }),
    };
  }
}
