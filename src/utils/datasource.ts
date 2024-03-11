import { DataSource, DataSourceOptions } from 'typeorm';

// for typeorm
export const TypeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test_db',
  logging: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: false,
};
console.log(process.cwd() + '/src/migrations/*{.ts,.js}--------');
// for migrations
const connectionSource = new DataSource(TypeormConfig);
export default connectionSource;
