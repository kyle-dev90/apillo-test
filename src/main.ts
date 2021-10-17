import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set port as a default 3000
  const port = +process.env.APP_PORT || 3000;
  // set api route starts with /api prefix
  app.setGlobalPrefix('api/v1');

  // swagger module setup
  const config = new DocumentBuilder()
    .setTitle('Apillo Test')
    .setDescription('The Apillo Test API description')
    .setVersion('1.0')
    .addTag('apillo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);
  await app.listen(port);
}
bootstrap();
