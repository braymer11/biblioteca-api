const express = require('express');
const app = express();
const port = 5000;

// Importar rutas
const bibliotecaRoutes = require('./routes/bibliotecaRoutes');

// Usar las rutas
app.use('/libros', bibliotecaRoutes);  // Rutas de libros
app.use('/autores', bibliotecaRoutes); // Rutas de autores

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la Biblioteca');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
