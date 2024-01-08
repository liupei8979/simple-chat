import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from 'src/firestore/firestore.module';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRATION_TIME')}
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [AuthService, JwtStrategy, JwtAuthGuard]
})
export class AuthModule {}