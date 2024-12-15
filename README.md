# API de Biblioteca

Este proyecto es una API de biblioteca simple creada con Node.js y Express. Permite consultar información sobre libros y autores, así como filtrar libros por su disponibilidad.

## Requisitos

- Node.js instalado en tu sistema
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/braymer11/biblioteca-api.git
   ```
2. Accede a la carpeta del proyecto:
   ```bash
   cd biblioteca-api
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```
2. Utiliza los enlaces de abajo para probar las rutas directamente desde tu navegador o usa una herramienta como Postman.

## Rutas

### Principal

- [**Ruta principal**](http://localhost:5000/)  
  Método: `GET`  
  Retorna un mensaje de bienvenida:  
  ```json
  {
    "mensaje": "Bienvenido a la API de la Biblioteca"
  }
  ```

### Libros

- [**Todos los libros**](http://localhost:5000/libros/)  
  Método: `GET`  
  Retorna la lista completa de libros disponibles en la biblioteca.

- [**Libros disponibles**](http://localhost:5000/libros/disponibles)  
  Método: `GET`  
  Retorna la lista de libros que están disponibles actualmente.

- [**Libros no disponibles**](http://localhost:5000/libros/nodisponibles)  
  Método: `GET`  
  Retorna la lista de libros que no están disponibles actualmente.

### Autores

- [**Todos los autores**](http://localhost:5000/autores/)  
  Método: `GET`  
  Retorna la lista completa de autores registrados en la biblioteca.

## Datos de Ejemplo

### Libros

```json
[
  { "id": 1, "titulo": "Cien años de soledad", "autorId": 1, "disponible": true },
  { "id": 2, "titulo": "Harry Potter y la piedra filosofal", "autorId": 2, "disponible": false },
  { "id": 3, "titulo": "El señor de los anillos", "autorId": 3, "disponible": true }
]
```

### Autores

```json
[
  { "id": 1, "nombre": "Gabriel García Márquez" },
  { "id": 2, "nombre": "J.K. Rowling" },
  { "id": 3, "nombre": "J.R.R. Tolkien" }
]
```

## Estructura del Proyecto

```
biblioteca-api/
├── controllers/
│   └── bibliotecaController.js
├── routes/
│   └── bibliotecaRoutes.js
├── app.js
└── package.json
```

## Tecnologías Utilizadas

- Node.js
- Express.js

## Autor

Creado por [Tu Nombre].

## Licencia

Este proyecto está bajo la Licencia MIT.
