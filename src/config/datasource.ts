import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
    
export const databaseConfig = new DataSource( {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: 'postgres',
  password: "imprint",
  database: "nest-migration",
  synchronize: false,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  cache: true,
  logger: 'advanced-console',
  logging: process.env.NODE_ENV === 'development',
  migrationsRun: true
});