

export class TodoList {

    constructor() {
        this.todo = [];
    }

    nuevoTodo( todo ) {
        this.todo.push( todo );
    }

    eliminarTodo( id ) {

        this.todo = this.todo.filter( todo => todo.id != id );

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
        
        this.todo = this.todo.filter( todo => !todo.completado );

    }

}