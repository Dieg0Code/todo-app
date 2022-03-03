import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todo.forEach( todo => crearTodoHtml( todo ) );