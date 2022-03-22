import { UpdateUserDto } from './dto/updateUser.dto';
import { AuthGuard } from './guards/auth.guard';
import { UserEntity } from './user.entity';
import { ExpressRequestInterface } from './../types/expressRequest.interface';
import { UserResponseInterface } from './types/userResponse.interface';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createuser.dto';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login.dto';
import { User } from './decorators/user.decorators';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto); // здесь получаем userEntity, который мы создали в БД
    return this.userService.buildUserResponse(user); // нормализируем для клиента
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  @UseGuards(AuthGuard) //проверка залогинены или нет
  async currentUser(
    @Req() request: ExpressRequestInterface,
    @User() user: UserEntity, //создали декторатор User и локальную переменную для его использования
  ): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(user);
  }

  @Put('user')
  @UseGuards(AuthGuard)
  async updateCurrentUser(
    @User('id') currentUserId: number,
    @Body('user') UpdateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(
      currentUserId,
      UpdateUserDto,
    );
    return this.userService.buildUserResponse(user);
  }
}
