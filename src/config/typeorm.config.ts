import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import 'dotenv/config';
import { databaseConfig } from "./datasource";
    
export const typeormAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async () => {
    return{
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: 'postgres',
      password: "imprint",
      database: "nest-migration",
      synchronize: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      cli: {
      migrationsDir: __dirname + '/../migrations',
      },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      cache: true,
      logger: 'advanced-console',
      logging: process.env.NODE_ENV === 'development',
      autoLoadEntities: true,
    }

  }
}

