# NodeJS Express Boilerplate

This project is a boilerplate for NodeJS RESTful API using Express.

## Installation

Use `npm install` to install all the dependencies.\
Use `npm start` to start the server.\
Add `NODE_ENV` environment variable with the value of:

- local - to connect your local DB.
- development - to connect to dev DB.
- staging - to connect to staging DB.
- production - to connect to prod DB.\

Configure your `src/config/knex.js` file with the relevant DB credentials for each environment.

[Link to the example route](http://localhost:3001/api/v1/example)

## Folder Structure

## src

### src/config

Describes the configuration to the DB with different `NODE_ENV` variable types, this file should be edited once.

### src/middleware

Contains the middlewares over all the application.\
In case of a new middleware, give it a general name and add all the middlewares that includes to that name.

### src/models

Contains all the ObjectionJS models and describes the connections to and between tables in your database.

### src/providers

Contains all the model providers, for model should have a provider that contains all his functional methods.

### src/routes

Contains all the routes over all the application.\
In case of a new route, make sure that you add it to the index.js file as well.

#### \*\*\* New routes will be added to the following path: /api/v1/<route_path>

### src/services

Contains all the services which are in used over all the application.

### src/startup

`knex.js` file which handles the connection to the DB and binds ObjectionJS's models to the correct DB connection.\
\
`routes.js` which handles the main route path (api/v1) and adds the rest of the routes in addition to them.

## test

### test/integration

Contains all the integration tests over all the application.\
Separate the test files into correct folders, in example:

- Providers tests will be in `/providers` folder.
- Routes tests will be in `/routes` folder.

### test/units

Contains all the unit tests over all the application.\
Separate the test files into correct folders, in example:

- Providers tests will be in `/providers` folder.
- Routes tests will be in `/routes` folder.
