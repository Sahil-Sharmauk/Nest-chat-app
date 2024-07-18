import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    console.log(registerDto);
  }

  async login(loginDto: LoginDto) {
    console.log(loginDto);
  }
}
