

export class TodoList {

    constructor() {
        this.todo = [];
    }

    nuevoTodo( todo ) {
        this.todo.push( todo );
    }

    eliminarTodo( id ) {

    }

    marcarCompletado( id ) {

        for (const todo of this.todo) {

            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados() {
        
    }

}