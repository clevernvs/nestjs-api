// import { Injectable, UnprocessableEntityException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { UserRepository } from './users.repository';
// import { CreateUserDto } from './dto/create-user.dto';
// import { User } from './user.entity';
// import { UserRole } from './user-roles.enum';

// @Injectable()
// export class UsersService {
//     constructor(
//         @InjectRepository(UserRepository)
//         private userRepository: UserRepository,
//     ) { }

//     async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
//         if (createUserDto.password != createUserDto.passwordConfirmation) {
//             throw new UnprocessableEntityException('As senhas não conferem');
//         } else {
//             return this.userRepository.createUser(createUserDto, UserRole.ADMIN);
//         }
//     }
// }

import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './user-roles.enum';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(createUserDto: CreateUserDto, role: UserRole) {
        return this.userRepository.createUser(createUserDto, role);
    }

    async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
        if (createUserDto.password != createUserDto.passwordConfirmation) {
            throw new UnprocessableEntityException('As senhas não conferem');
        } else {
            return this.userRepository.createUser(createUserDto, UserRole.ADMIN);
        }
    }
}
