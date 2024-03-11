
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## steps to run migrations- 
- 1. create migration
    npm run migration:create --name=<tableName>
- 2. run migration
    npm run migrate







<!-- migration run command -->
$ npm run migration:generate src/migrations/create_user

1. if we create a entity then run migration:generate command then it will create migration file inside migrations folder
2. if sync is true then it generates the entity table inside database automatically, and on other side if sync is false and run migration:generate command then it creates migration file inside migrations folder but not make any changes inside database
3. In case of sync is false then any change not occurs inside database, then we have to run the migrations using migration:run command to reflect changes inside database
