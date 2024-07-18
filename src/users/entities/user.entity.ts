import { CreateUserDto } from '../dto/create-user.dto';

export class UserEntity implements Partial<CreateUserDto> {
  id: string;
  name: string;
  email: string;
  password: string;
}
