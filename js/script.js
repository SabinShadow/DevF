window.onload = function() {
    var nombre = prompt('Cual es tu Nombre?', '');
    if (nombre) {
        document.getElementById('mensaje').innerHTML = 'Bienvenido ' + nombre;
    }

}