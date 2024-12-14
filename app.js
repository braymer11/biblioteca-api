// app.js
const express = require('express');
const app = express();
const bibliotecaRoutes = require('./routes/bibliotecaRoutes');

// Ruta base (opcional, solo para probar que el servidor funciona)
app.get('/', (req, res) => {
  res.send('¡El servidor está corriendo!');
});

// Usar las rutas definidas bajo el prefijo /api
app.use('/api', bibliotecaRoutes);

// Puerto del servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
