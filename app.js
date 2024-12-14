const express = require('express');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const port = 5000;

// Usar CORS antes de definir las rutas
app.use(cors());  // Habilitar CORS para todas las rutas

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
