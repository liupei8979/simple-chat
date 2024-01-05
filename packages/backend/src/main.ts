import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger config 작성하기
  
  const port = process.env.PORT || 3003;
  await app.listen(port);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
