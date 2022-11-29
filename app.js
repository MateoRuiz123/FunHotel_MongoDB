require('dotenv').config();

const {
    application
} = require('express');
const Server = require('./models/server');

const server = new Server();

server.listen();