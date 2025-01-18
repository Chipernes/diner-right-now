import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = await app.get(ConfigService);

  app.enableCors({
    origin: configService.get<string>('CLIENT_URI'),
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(configService.get<number>('API_PORT'));
  console.log(`🚀 Backend launched at ${configService.get<number>('API_URI')}`);
}
bootstrap();
