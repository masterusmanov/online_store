import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { MailModule } from '../mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Users]), JwtModule.register({}), MailModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UserModule {}
