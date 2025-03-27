import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async createAdminUser(
        @Body() createUserDto: CreateUserDto,
    ): Promise<ReturnUserDto> {
        const user = await this.userService.createAdminUser(createUserDto);
        return {
            user,
            message: 'Administrador cadastrado com sucesso',
        };
    }
}