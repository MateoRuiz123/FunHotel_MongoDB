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
        this.clientesPath = '/api/clientes';
        this.habitacionesPath = '/api/habitaciones';
        this.rolesPath = '/api/roles';
        this.catalogosPath = '/api/catalogos';
        this.ventasPath = '/api/ventas';
        this.reservasPath = '/api/reservas';
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
        this.app.use(this.clientesPath, require('../routes/clientes'));
        this.app.use(this.habitacionesPath, require('../routes/habitaciones'));
        this.app.use(this.rolesPath, require('../routes/roles'));
        this.app.use(this.catalogosPath, require('../routes/catalogos') ); 
        this.app.use(this.ventasPath, require('../routes/ventas') ); 
        this.app.use(this.reservasPath, require('../routes/reservas') ); 
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server