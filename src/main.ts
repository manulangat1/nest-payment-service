import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppconfigService } from './appconfig/appconfig.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { port } = app.get(AppconfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );
  app.enableCors();
  await app.listen(port);
}
bootstrap();
