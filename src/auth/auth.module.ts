import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from './services/password.service';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, PasswordService],
})
export class AuthModule {}
