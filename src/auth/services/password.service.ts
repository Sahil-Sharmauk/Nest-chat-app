import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

Injectable();
export class PasswordService {
  constructor() {}

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
