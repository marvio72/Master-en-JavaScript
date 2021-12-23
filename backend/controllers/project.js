'use strict';

let Project = require('../models/project');
const { param } = require('../routes/project');

let controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: 'Soy la home',
    });
  },
  test: function (req, res) {
    return res.status(200).send({
      message: 'Soy el metodo o acción test del controlador de project',
    });
  },
  saveProject: function (req, res) {
    //Crear un objeto de Project
    let project = new Project();
    let params = req.body;

    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    project.save((err, projejectStored) => {
      if (err) return res.status(500).send({ message: 'Error al guardad el documento.' });
      if (!projejectStored)
        return res.status(404).send({ message: 'No se ha podido guardar el documento.' });
      return res.status(200).send({ project: projejectStored });
    });
  },

  getProject: function (req, res) {
    let projectId = req.params.id;

    if (projectId == null) return res.status(404).send({ message: 'El proyecto no existe.' });

    Project.findById(projectId, (err, project) => {
      if (err) return res.status(500).send({ message: 'Error al devolver los datos' });
      if (!project) return res.status(404).send({ message: 'El proyecto no existe.' });
      return res.status(200).send({ project });
    });
  },
};

module.exports = controller;
