import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserExistGuard } from './guards/user-exists.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  @UseGuards(UserExistGuard)
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto);
    return this.authService.login(loginDto);
  }
}
