import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config/dist';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { typeormAsyncConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache:true
    }),
    TypeOrmModule.forRootAsync(typeormAsyncConfig)
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
