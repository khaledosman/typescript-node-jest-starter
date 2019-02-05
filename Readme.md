Starter project for NodeJS Express apps built with Typescript

## Features
1. Rate limiting
2. Caching Requests via redis
3. Unit tests with jest
4. Production ready docker file
5. typescript integration
6. Clustering
7. Gzip compression
8. Securing HTTP headers using helmet
9. .env files for setting up environment variables1
10. Advanced logging with bunyan

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
