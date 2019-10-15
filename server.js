const server = require('./src/config/app')();
const config = require('./src/config/env_config/config');
const db = require('./src/config/db');

//create the basic server setup 
server.create(config, db);

//start the server
server.start();