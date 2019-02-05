Boiler plate / Starter project for NodeJS Express apps built with Typescript & Jest for testing

use `yarn dev` to run the app in dev mode and restart the app on file changes thanks to nodemon

use `yarn test` or `yarn test:watch` to run the unit tests configured with jest. supertest library is also setup for testing http requests / APIs
`yarn test` will also print out code coverage information

use `yarn lint` to print out lint errors or `yarn lint:fix` to fix lint errors.. It is recommended to add `yarn lint` as a git commit prehook to see lint errors before commiting

use `yarn start` to run the application or `yarn cluster` to run multiple instances of the application depending on the CPU support as implemented in clusters.ts file

Environment variables are setup in the .env file and will be overwritten if defined before running the application

bunyan is integrated as a logging library for more detailed as well as advanced logging over console.log, some of its features include Log levels & level filtering, outputting logs to files with daily rotations, async logging for better performance over console.log and detailed logs by default for output things like machine name, timestamps, process id, request id, request info, etc..

redis & https://www.npmjs.com/package/express-redis-cache is also integrated for caching API responses and https://github.com/nfriedly/express-rate-limit#readme is integrated for ratelimiting to prevent DOS attacks

To run the app standalone without docker make sure you have redis-server and mongod install then run
1. `mongod`
1. `redis-server`
1. `nodemon --inspect src/index.ts` or `ts-node src/index.ts`

To run the app via docker run
```docker-compose -f docker-compose.yml build```
```docker-compose -f docker-compose.yml up```

** Features **
1. Rate limiting
2. Caching Requests via redis
3. Unit tests with jest
4. Production ready docker file
5. typescript integration
6. Clustering
7. Gzip compression
8. Securing HTTP headers using helmet
9. .env files for setting up environment variables
