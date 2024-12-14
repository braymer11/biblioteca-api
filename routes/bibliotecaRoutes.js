const express = require('express');
const router = express.Router();

// Datos de ejemplo en memoria
const libros = [
  { id: 1, titulo: 'Cien años de soledad', autorId: 1, disponible: true },
  { id: 2, titulo: 'Harry Potter y la piedra filosofal', autorId: 2, disponible: false },
  { id: 3, titulo: 'El señor de los anillos', autorId: 3, disponible: true }
];

// Datos de ejemplo de autores
const autores = [
  { id: 1, nombre: 'Gabriel García Márquez' },
  { id: 2, nombre: 'J.K. Rowling' },
  { id: 3, nombre: 'J.R.R. Tolkien' }
];

// Obtener todos los libros
router.get('/', (req, res) => {
  res.json(libros); // Retorna todos los libros
});

// Obtener libros disponibles
router.get('/disponibles', (req, res) => {
  const librosDisponibles = libros.filter(libro => libro.disponible);
  res.json(librosDisponibles); // Retorna solo los libros disponibles
});

// Obtener libros no disponibles
router.get('/nodisponibles', (req, res) => {
  const librosNoDisponibles = libros.filter(libro => !libro.disponible);
  res.json(librosNoDisponibles); // Retorna solo los libros no disponibles
});

// Obtener todos los autores
router.get('/autores', (req, res) => {
  res.json(autores); // Retorna todos los autores
});

module.exports = router;
