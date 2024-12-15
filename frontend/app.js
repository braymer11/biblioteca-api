// URL base de la API
const API_URL = 'http://localhost:5000';

// Función para obtener y mostrar datos
function obtenerDatos(endpoint) {
    const url = `${API_URL}${endpoint}`;
    console.log('Haciendo solicitud a:', url);  // Verifica que la URL esté correcta

    // Realizamos la solicitud a la API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos:', data);  // Verifica los datos que estás recibiendo
            const contenido = document.getElementById('contenido');
            
            // Verifica si la respuesta es un arreglo
            if (Array.isArray(data) && data.length > 0) {
                // Muestra los autores
                contenido.innerHTML = data.map(item => {
                    // Si tiene el campo 'nombre', lo tratamos como autor
                    if (item.nombre) {
                        return `<p><strong>Autor:</strong> ${item.nombre}</p>`;
                    }
                    // Si tiene el campo 'titulo', lo tratamos como libro
                    if (item.titulo) {
                        return `
                            <p>
                                <strong>Título:</strong> ${item.titulo} <br>
                                <strong>Disponible:</strong> ${item.disponible ? 'Sí' : 'No'}
                            </p>`;
                    }
                    return ''; // En caso de que no haya datos válidos
                }).join('');
            } else {
                contenido.innerHTML = '<p>No se encontraron datos.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            document.getElementById('contenido').innerHTML = '<p>Error al cargar los datos.</p>';
        });
}

// Eventos para los botones
document.getElementById('ver-autores').addEventListener('click', () => {
    console.log('Botón "Ver Autores" clickeado');
    obtenerDatos('/autores');
});

document.getElementById('ver-libros').addEventListener('click', () => {
    console.log('Botón "Ver Libros" clickeado');
    obtenerDatos('/libros');
});

document.getElementById('libros-disponibles').addEventListener('click', () => {
    console.log('Botón "Libros Disponibles" clickeado');
    obtenerDatos('/libros/disponibles');
});

document.getElementById('libros-no-disponibles').addEventListener('click', () => {
    console.log('Botón "Libros No Disponibles" clickeado');
    obtenerDatos('/libros/nodisponibles');
});
