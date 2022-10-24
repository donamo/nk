import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { microserviceConfig } from './microserviceConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
  });

  await app.connectMicroservice<MicroserviceOptions>({
    ...microserviceConfig,
  });

  await app.startAllMicroservices();
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
