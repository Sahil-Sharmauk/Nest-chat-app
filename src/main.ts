import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const authOptions = {
    users: { 'chat-app': '798690' }, // Replace with your actual username and password
    challenge: true, // Show login dialog
  };

  app.use('/api-docs', basicAuth(authOptions));
  const config = new DocumentBuilder()
    .setTitle('Chat-App')
    .setDescription(`API's for Chat-App `)
    .setVersion('0.1')
    .addTag('Chat-App')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
