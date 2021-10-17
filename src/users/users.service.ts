import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { wrap } from '@mikro-orm/core';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email } = createUserDto;

    // check User is exisiting or not
    const exists = await this.userRepository.count({
      $or: [{ name }, { email }],
    });

    if (exists > 0) {
      throw new ForbiddenException('User already existed.');
    }
    // save new User
    const newUser = new User({ ...createUserDto });
    wrap(newUser).assign(createUserDto);
    await this.userRepository.persistAndFlush(newUser);

    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: number): Promise<User> {
    const foundUser = await this.userRepository.findOne(+id);

    if (!foundUser) {
      throw new NotFoundException('User not found.');
    }

    return foundUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const foundUser = await this.userRepository.findOne(+id);

    if (!foundUser) {
      throw new NotFoundException('User not found.');
    }

    wrap(foundUser).assign(updateUserDto);

    await this.userRepository.flush();

    return foundUser;
  }

  async remove(id: number): Promise<User> {
    const foundUser = await this.userRepository.findOne(+id);

    if (!foundUser) {
      throw new NotFoundException('User not found.');
    }

    await this.userRepository.remove(foundUser).flush();

    return foundUser;
  }
}
