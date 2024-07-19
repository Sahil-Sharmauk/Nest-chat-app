import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from '../dto/create-auth.dto';
import { PasswordService } from './password.service';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly usersService: UsersService,
  ) {}
  async register(registerDto: RegisterDto) {
    console.log('registerDto', registerDto);
    const hash_password = this.passwordService.hashPassword(
      registerDto.password,
    );
    console.log(hash_password);
    // await this.usersService.create(registerDto);
  }

  async login(loginDto: LoginDto) {
    console.log(loginDto);
  }
}
