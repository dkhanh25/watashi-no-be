import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  createUser(): string {
    return this.userService.createUser();
  }
  @Put()
  putUser(): string {
    return this.userService.putUser();
  }

  @Get('/:id')
  getUserDetailInfo(@Param('id') id): string {
    return this.userService.getUserDetailInfo(id);
  }
}
