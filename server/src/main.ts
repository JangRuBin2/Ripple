import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
<<<<<<< HEAD
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions: {
      key: fs.readFileSync('localhost.key'),
      cert: fs.readFileSync('localhost.crt'),
    },
  });

  // CORS 설정
  app.enableCors();

  // client/build 폴더 서빙
  app.useStaticAssets(join(__dirname, '../', '../', 'client', 'build'));
=======
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // CRA 빌드 결과물이 위치한 경로를 지정합니다.
  console.log(path.join(__dirname, '..', '..', 'client', 'build'))
  const staticFilesPath = path.join(__dirname, '..', '..', 'client', 'build');
  app.useStaticAssets(staticFilesPath);

  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // 정적 파일 경로 설정
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));

  // // '/' 요청이 왔을 때 빌드된 index.html 파일을 반환합니다.
  // app.use('*', (req: Request, res: Response, next: NextFunction) => {
  //   res.sendFile(path.join(staticFilesPath, 'index.html'));
  // });
>>>>>>> kwon5-1

  await app.listen(3000);
}
bootstrap();
