## Starting App
$ npm install -g pm2  
$ npm install  
$ npm run migrate  
$ npm start  
$ NODE_ENV=production npm start  

## Local 개발 환경 설정
- install docker  
https://docs.docker.com/install/#releases
- mariadb container  
$ docker run -p 3306:3306 --name mariadb_local -e MYSQL_ROOT_PASSWORD=1234 -d --restart=always mariadb

## Running Tests
$ npm test

## Tech Stack
- Node Process Manage  
PM2: https://pm2.io/doc/en/runtime/overview/  

- Web framework  
Express: http://expressjs.com/ko/  
Passport: http://www.passportjs.org/docs/  

- Database ORM & migration
Sequelize: http://docs.sequelizejs.com

- Test
jest: https://jestjs.io/