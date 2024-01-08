import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { FirestoreModule } from 'src/firestore/firestore.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule,
    JwtModule
    ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}