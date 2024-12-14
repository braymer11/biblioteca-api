const express = require('express');
const app = express();

// Rutas
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de la Biblioteca!');
});

// Si tienes otras rutas, deben estar correctamente configuradas:
app.get('/autores', (req, res) => {
    // Aquí deberías devolver los autores
});

app.get('/libros', (req, res) => {
    // Aquí deberías devolver los libros
});

// Puerto en el que se escucha
const port = 5000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
