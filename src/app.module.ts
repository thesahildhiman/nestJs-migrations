import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './utils/datasource';

@Module({
  // imports: [
  //   ConfigModule.forRoot(),
  //   UsersModule,
  //   TypeOrmModule.forRoot({
  //     type: process.env.DB_TYPE as any,
  //     host: process.env.PG_HOST,
  //     port: parseInt(process.env.PG_PORT),
  //     username: process.env.PG_USER,
  //     password: process.env.PG_PASSWORD,
  //     database: process.env.PG_DB,
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'], // it looks for file inside src/<any subdirectory>/*.entity.ts
  //     logging: true,
  //     synchronize: false,
  //     // migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
  //     migrationsTableName: 'typeorm_migrations',
  //     migrationsRun: false,
  //   }),
  // ],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeormConfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
