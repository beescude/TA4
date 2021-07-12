const express = require('express');
const server = express();
const cors = require('cors');


//Configuraciones
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(cors());
server.use(express.json());



//Rutas
server.use('/ejercicioA', require('./routes/ejercicio_a.js'));
server.get('/', function (req, res) {
   res.send('<h1> Hola Ecuador con Expresss </h1>')
});
server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})


module.exports = server;
