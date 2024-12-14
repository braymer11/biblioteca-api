// routes/bibliotecaRoutes.js
const express = require('express');
const router = express.Router();
const bibliotecaController = require('../controllers/bibliotecaController');

// Rutas de los autores
router.get('/autores', bibliotecaController.getAutores);

// Rutas de los libros
router.get('/libros', bibliotecaController.getLibros);
router.get('/libros/disponibles', bibliotecaController.getLibrosDisponibles);
router.get('/libros/nodisponibles', bibliotecaController.getLibrosNoDisponibles);

module.exports = router;
