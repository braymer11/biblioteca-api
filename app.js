const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Configurar CORS para permitir solicitudes desde el dominio de tu frontend
const corsOptions = {
  origin: 'https://biblioteca-api-sandy.vercel.app', // Reemplaza con la URL de tu frontend
  methods: 'GET,POST,PUT,DELETE',                   // Métodos permitidos
  allowedHeaders: 'Content-Type, Authorization',    // Encabezados permitidos
};

app.use(cors(corsOptions)); // Habilitar CORS
app.use(express.json());    // Habilitar JSON para las solicitudes

// Importar rutas
const bibliotecaRoutes = require('./routes/bibliotecaRoutes');

// Usar las rutas
app.use('/libros', bibliotecaRoutes);
app.use('/autores', bibliotecaRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la Biblioteca');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

