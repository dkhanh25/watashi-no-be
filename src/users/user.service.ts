import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return "User's name";
  }

  createUser(): string {
    return "created user's name";
  }

  putUser(): string {
    return "update another user's name";
  }

  getUserDetailInfo(id): string {
    return "user's ageing: " + id;
  }
}
