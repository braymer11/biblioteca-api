// models/libro.js
class Libro {
    constructor(id, titulo, autorId, disponible) {
      this.id = id;
      this.titulo = titulo;
      this.autorId = autorId;
      this.disponible = disponible; // true si está disponible, false si no
    }
  }
  
  module.exports = Libro;
  