// app.js

const express = require('express');
const app = express();
const port = 5000;

// Datos de ejemplo (como tenías antes)
const autores = [
  { id: 1, nombre: 'Gabriel García Márquez', nacionalidad: 'Colombiana' },
  { id: 2, nombre: 'J.K. Rowling', nacionalidad: 'Británica' },
];

const libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', disponible: true, anio_publicacion: 1967 },
  { id: 2, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', disponible: false, anio_publicacion: 1997 },
];

// Endpoint para obtener la información de los autores y libros
app.get('/info', (req, res) => {
  res.json({
    autores: autores,
    libros: libros,
  });
});

// Otros endpoints existentes...
app.get('/api/autores', (req, res) => {
  res.json(autores);
});

app.get('/api/libros', (req, res) => {
  res.json(libros);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
