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
        this.check_insPath = '/api/check_ins';
        this.check_outsPath = '/api/check_outs';
        this.metodo_pagosPath = '/api/metodo_pagos';
        this.usuariosPath = '/api/usuarios';
        this.salasPath = '/api/salas';
        this.permisosPath = '/api/permisos';
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
        this.app.use(this.check_insPath, require('../routes/check_ins') ); 
        this.app.use(this.check_outsPath, require('../routes/check_outs') ); 
        this.app.use(this.metodo_pagosPath, require('../routes/metodo_pagos') ); 
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        this.app.use(this.salasPath, require('../routes/salas'));
        this.app.use(this.permisosPath, require('../routes/permisos'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server