import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger config 작성하기
  const config = new DocumentBuilder()
    .setTitle('Simple Chat API')
    .setDescription('Websocket을 이용한 실시간 채팅 서비스')
    .setVersion('0.1')
    //.addCookieAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  const port = process.env.PORT || 3003;
  await app.listen(port);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
