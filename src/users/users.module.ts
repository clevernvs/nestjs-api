// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from './users.repository';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';

// @Module({
//     imports: [TypeOrmModule.forFeature([UserRepository])],
//     providers: [UsersService],
//     controllers: [UsersController],
// })
// export class UsersModule { }


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { DataSource } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [
        UserService,
        {
            provide: UserRepository,
            useFactory: (dataSource: DataSource) => new UserRepository(dataSource),
            inject: [DataSource],
        },
    ],
    exports: [UserRepository],
})
export class UserModule { }
