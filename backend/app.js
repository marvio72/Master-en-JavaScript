'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// cargar archivos de rutas
const project_routes = require('./routes/project');
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// rutas
app.use('/api', project_routes);

// app.get('/', (req, res) => {
//   res.status(200).send('<h1>Pagina de inicio</h1>');
// });
// app.get('/test', (req, res) => {
//   res.status(200).send({
//     message: 'Hola mundo desde mi API de NodeJS',
//   });
// app.post('/test/:id', (req, res) => {
//   console.log(req.body.nombre);
//   console.log(req.query.web);
//   console.log(req.params.id);
//   res.status(200).send({
//     message: 'Hola mundo desde mi API de NodeJS',
//   });
// });

// exportar
module.exports = app;
