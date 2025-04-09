import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // you'll need to create this
import { RegisterUserInput } from './dto/register-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });
    return user;
  }
}
