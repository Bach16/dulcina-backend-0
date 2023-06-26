import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from "morgan"
import { CORS } from './constants';
import { ConfigService } from "@nestjs/config"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan("dev"))

  app.enableCors(CORS)

  app.setGlobalPrefix("api")

  const configService = app.get(ConfigService)

  await app.listen(configService.get("PORT"));
  console.log(`Application running on: ${await app.getUrl()}`)
}
bootstrap();
