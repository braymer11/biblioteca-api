# Biblioteca API

Este es un proyecto para gestionar una biblioteca utilizando una API REST. Puedes interactuar con los recursos **Autores** y **Libros** a través de los siguientes endpoints.

## Endpoints

### Página Principal
- **GET** `/`  
  Devuelve un mensaje indicando que el servidor está corriendo.  
  Ejemplo: `http://localhost:5000/`

### Autores
- **GET** `/api/autores`  
  Lista todos los autores.  
  Ejemplo: `http://localhost:5000/api/autores`

### Libros
- **GET** `/api/libros`  
  Lista todos los libros.  
  Ejemplo: `http://localhost:5000/api/libros`

- **GET** `/api/libros/disponibles`  
  Lista solo los libros disponibles.  
  Ejemplo: `http://localhost:5000/api/libros/disponibles`

- **GET** `/api/libros/nodisponibles`  
  Lista solo los libros no disponibles.  
  Ejemplo: `http://localhost:5000/api/libros/nodisponibles`

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/biblioteca-api.git

