/*
 * @Author: junw wo1261931780@gmail.com
 * @Date: 2024-05-06 14:29:32
 * @LastEditors: junw wo1261931780@gmail.com
 * @LastEditTime: 2024-05-06 14:30:45
 * @FilePath: \undefinedc:\Users\junw\Desktop\boss-jd-spider\src\app.module.ts
 * @Description: 1111
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entites/Job';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 4306,
      username: "root",
      password: "guang",
      database: "boss-spider",
      synchronize: true,
      logging: true,
      entities: [Job],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
          authPlugin: 'sha256_password',
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
