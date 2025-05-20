// src/user/user.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './user/dto/create-user.dto';
import { UserService } from './user/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: '유저 생성' })
  create(@Body() body: CreateUserDto) {
    return this.userService.createUser({ name: body.name, email: body.email });
  }

  @Get()
  @ApiOperation({ summary: '모든 유저 조회' })
  findAll() {
    return this.userService.getAllUsers();
  }
}
