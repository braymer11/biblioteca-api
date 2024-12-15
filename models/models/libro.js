const Libro = require('../models/libro');

const libros = [
    new Libro(1, "Cien años de soledad", 1, true),
    new Libro(2, "Harry Potter y la piedra filosofal", 2, false),
    new Libro(3, "El señor de los anillos", 3, true),
];

module.exports = libros;
