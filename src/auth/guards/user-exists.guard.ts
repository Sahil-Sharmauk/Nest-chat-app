import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class UserExistGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { email } = request.body;
    const user = this.userService.findUserByEmail(email);
    if (user) {
      throw new HttpException(
        'User with this email is already registered',
        HttpStatus.FORBIDDEN,
      );
    }
    return true;
  }
}
