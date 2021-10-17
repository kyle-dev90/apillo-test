# Getting started
NestJS + PostgreSQL(Mikro-ORM) Dockerized Demo
# Installation
Install dependencies
    
    docker

----------

Installation workflow
    
    docker-compose up -d

----------

Watchmode run workflow
    
    docker-compose up

----------

## NPM scripts

    yarn install
- `yarn start` - Start application
- `yarn start:dev` - Start application in watch mode
- `yarn test` - run Jest test runner 
- `yarn test:e2e` - E2E Test
- `config/mikro-orm.confg.ts` - PostgreSQL configuration

----------

## API Specification
- `swagger-ui` - http://localhost:300/api/v1
- `CRUD ex` - http://localhost:300/api/users