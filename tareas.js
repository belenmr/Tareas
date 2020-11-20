const encodingUsado = 'utf-8';
let fs = require('fs');
let listaDeTareas = fs.readFileSync('./tareas.json',encodingUsado);
let tareas = JSON.parse(listaDeTareas);

module.exports = moduloTareas = {
    archivo : './tareas.json',
    leerJSON : function() {
       return tareas;
    },
    escribirJSON : function(titulo,estado){

        let nuevaTarea = {
            titulo : titulo,
            estado: estado
        }

        tareas.push(nuevaTarea);
        this.guardarJSON(tareas);
        console.log("Nueva tarea agregada exitosamente");
    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync(this.archivo,nuevoJSON,encodingUsado);
        return console.log('El JSON ha sido guardado exitosamente')
    },
    deshacer : function(){     
        tareas.pop()
        this.guardarJSON(tareas)
    },
    buscarTarea : function(busqueda){
        let tareasFiltradas = tareas.filter(function(tarea){            
            return tarea.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });
        return tareasFiltradas;        
    }
  
}

