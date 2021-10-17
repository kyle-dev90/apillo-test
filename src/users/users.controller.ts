import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { ErrorResponseDto } from './dto/error-response.dto';

@ApiResponse({ status: 403, description: 'Forbidden.', type: ErrorResponseDto })
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: 200,
    description: 'Returns the newly created user record',
    type: CreateUserResponseDto,
  })
  @ApiOperation({
    summary: 'Create New User(name, email)',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Returns the all user list',
  })
  @ApiOperation({
    summary: 'Get all users',
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Returns the one user by id search',
    type: CreateUserResponseDto,
  })
  @ApiOperation({
    summary: 'Get user by id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update user by id and infos',
    type: CreateUserResponseDto,
  })
  @ApiOperation({
    summary: 'Update user by id and infos',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Delete user by id and infos',
    type: CreateUserResponseDto,
  })
  @ApiOperation({
    summary: 'Delete user by id and infos',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
