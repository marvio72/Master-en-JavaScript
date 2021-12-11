'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Estructura de la tabla Projects
let ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: [String],
});

module.exports = mongoose.model('Project', ProjectSchema);
