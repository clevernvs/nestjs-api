import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './user-roles.enum';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private readonly dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async createUser(createUserDto: CreateUserDto, role: UserRole): Promise<User> {
        const { email, name, password } = createUserDto;

        const user = this.create();
        user.email = email;
        user.name = name;
        user.role = role;
        user.status = true;
        user.confirmationToken = crypto.randomBytes(32).toString('hex');
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save();
            // delete user.password;
            // delete user.salt;
            return user;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Endereço de email já está em uso');
            } else {
                throw new InternalServerErrorException('Erro ao salvar o usuário no banco de dados');
            }
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}


// await user.save();
//             delete user.password;
//             delete user.salt;
//             return user;