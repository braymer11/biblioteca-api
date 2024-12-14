// controllers/bibliotecaController.js

const autores = [
    { id: 1, nombre: "Autor 1" },
    { id: 2, nombre: "Autor 2" },
    { id: 3, nombre: "Autor 3" },
];

const libros = [
    { id: 1, titulo: "Libro 1", disponible: true, autorId: 1 },
    { id: 2, titulo: "Libro 2", disponible: false, autorId: 2 },
    { id: 3, titulo: "Libro 3", disponible: true, autorId: 3 },
];

exports.getAutores = (req, res) => {
    res.json(autores);
};

exports.getLibros = (req, res) => {
    res.json(libros);
};

exports.getLibrosDisponibles = (req, res) => {
    const librosDisponibles = libros.filter(libro => libro.disponible);
    res.json(librosDisponibles);
};

exports.getLibrosNoDisponibles = (req, res) => {
    const librosNoDisponibles = libros.filter(libro => !libro.disponible);
    res.json(librosNoDisponibles);
};
