const express = require('express');
const {
    dbConnection
} = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.serviciosPath = '/api/servicios';
        this.conectarDB()
        this.middlewares();
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.serviciosPath, require('../routes/servicios'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server