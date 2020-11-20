let process = require('process');
let moduloTareas = require('./tareas');
let comando = process.argv[2];

switch (comando) {
    case 'listar':
        let tareas = moduloTareas.leerJSON();

        if (tareas.length === 0) {
            console.log("----------------------------");
            console.log("La lista de tareas está vacia");
            console.log("----------------------------");
        } else {
            console.log("----------------------------");
            console.log("Este es tu listado de tareas");
            console.log("----------------------------");

            for (const tarea of tareas) {
                console.log("Titulo: " + tarea.titulo);
                console.log("Estado: " + tarea.estado);
                console.log("");
            }
        }
        break;

    case 'agregar':
        let nuevoTitulo = process.argv[3];
        let nuevoEstado = process.argv[4];

        moduloTareas.escribirJSON(nuevoTitulo,nuevoEstado = "pendiente");
        break;
    
    case 'deshacer' :
        moduloTareas.deshacer()
        break;

    case 'buscar' :
        let resultado = moduloTareas.buscarTarea(process.argv[3])

        resultado.forEach(tarea => {
            console.log(tarea);
        });
        break;

    default:
        break;
}
