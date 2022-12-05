const express = require('express');
const {
    dbConnection
} = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.serviciosPath = '/api/servicios';
        this.categoriasPath = '/api/categorias';
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
        this.app.use(this.categoriasPath, require('../routes/categorias'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server