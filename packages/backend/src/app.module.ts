import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   // Typeorm configuration
    // }),

  ],
  controllers: [AppController],
  providers: [ChatGateway, AppService],
})
export class AppModule {}
