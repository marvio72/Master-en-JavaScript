'use strict';

const project = require('../models/project');
let Project = require('../models/project');
const fs = require('fs');

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

  getProjects: function (req, res) {
    Project.find({})
      .sort('-year')
      .exec((err, projects) => {
        if (err)
          return res.status(500).send({ message: 'Error al devolver la lista de documentos' });
        if (!projects) return res.status(404).send({ message: 'No hay documentos existentes' });
        return res.status(200).send({ projects });
      });
  },

  updateProject: function (req, res) {
    let projectId = req.params.id;
    let update = req.body;

    Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {
      if (err) return res.status(500).send({ message: 'Error en la actualización de datos' });
      if (!projectUpdated) return res.status(404).send({ message: 'Documento no encontrado' });
      return res.status(200).send({ project: projectUpdated });
    });
  },

  deleteProject: function (req, res) {
    let projectId = req.params.id;

    Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
      if (err) return res.status(500).send({ message: 'Error al eliminar el documento' });
      if (!projectRemoved) return res.status(404).send({ message: 'No existe el documento' });
      return res
        .status(200)
        .send({ project: projectRemoved, message: `El documento ${projectId} ha sido eliminado` });
    });
  },

  uploadImage: function (req, res) {
    let projectId = req.params.id;
    let fileName = 'Imagen no subida...';

    if (req.files) {
      let filePath = req.files.image.path;
      // Saca el nombre de el archivo.
      let fileSplit = filePath.split('/');
      let fileName = fileSplit[1];
      // Saca la extensión del archivo
      let extSplit = fileName.split('.');
      let fileExt = extSplit[1];

      if (fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'gif') {
        Project.findByIdAndUpdate(
          projectId,
          { image: fileName },
          { new: true },
          (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: 'Hubo un error al cargar la imagen' });

            if (!projectUpdated) return res.status(404).send({ message: 'La imagen no existe' });

            return res.status(200).send({ project: projectUpdated });
          }
        );
      } else {
        // Si no fue guardado en la base de datos eliminamos el archivo de la carpeta upload
        fs.unlink(filePath, (err) => {
          return res.status(500).send({ message: 'La extensión no es válida' });
        });
      }
    } else {
      return res.status(200).send({
        message: fileName,
      });
    }
  },
};

module.exports = controller;
