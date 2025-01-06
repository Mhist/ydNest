import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const options = new DocumentBuilder()
    .setTitle('jiangyadong')
    .setDescription('描述')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
