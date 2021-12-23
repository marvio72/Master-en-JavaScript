'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Estructura de la Colección Projects
let ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: String,
  image: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documentos en la colección
