[![Greenkeeper badge](https://badges.greenkeeper.io/khaledosman/typescript-node-jest-starter.svg)](https://greenkeeper.io/)
[![codebeat badge](https://codebeat.co/badges/29047d7b-e268-4156-a8c7-e46f85e95715)](https://codebeat.co/projects/github-com-khaledosman-typescript-node-jest-starter-master)

Starter project for NodeJS Express apps built with Typescript

## Features

1. Rate limiting
2. Caching API response via redis
3. Unit tests with jest
4. Production ready docker file for mongo, redis, and running multiple instances of the app via pm2
5. typescript integration
6. Clustering
7. Graceful start & Shutdown
8. Gzip compression
9. Securing HTTP headers using helmet & DDos preventing with rate limit
10. .env files for setting up environment variables1
11. Advanced logging with bunyan
12. git commit hooks to automatically fix lint errors with StandardJS

## npm scripts
use `yarn dev` to run the app in dev mode and restart the app on file changes thanks to nodemon

use `yarn test` or `yarn test:watch` to run the unit tests configured with jest. supertest library is also setup for testing http requests / APIs
`yarn test` will also print out code coverage information

use `yarn lint` to print out lint errors or `yarn lint:fix` to fix lint errors.. It is recommended to add `yarn lint` as a git commit prehook to see lint errors before commiting

use `yarn start` to run the application or `yarn cluster` to run multiple instances of the application depending on the CPU support as implemented in clusters.ts file

## Running as Standalone
To run the app standalone without docker make sure you have redis-server and mongod install then run
1. `mongod`
1. `redis-server`
1. `nodemon --inspect src/index.ts` or `ts-node src/index.ts`

## Running Inside docker
To run the app via docker run
```docker-compose -f docker-compose.yml build```
```docker-compose -f docker-compose.yml up```
