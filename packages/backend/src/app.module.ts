import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { FirestoreModule } from './firestore/firestore.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        keyFilename: configService.get<string>('FIRESTORE_KEY_FILENAME'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [ChatGateway, AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
