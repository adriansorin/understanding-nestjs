import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import register from '@react-ssr/nestjs-express/register';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await register(app);

  await app.listen(String(process.env.SERVER_PORT), async() => {
    console.log(`> Ready on http://localhost:${process.env.SERVER_PORT}`);
  });
}
bootstrap();
