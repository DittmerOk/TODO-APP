import { Render } from "./Render";
import { Request } from "./Request";

export class App {
  constructor() {
    this.todos = [];
    this.render = new Render(this);
    this.request = new Request();
  }

  loadTodos() {
    this.request
      .getTodos()
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos = data; 
        this.renderTodos(this.todos);
        console.log(this.todos);
      })
  }

  renderTodos() {
    this.render.pushTodos(this.todos);
  }

  addTodo(todo) {
    todo.id = this.todos.length + 1;
    this.request
      .postTodo(todo)
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos.push(data);
       
        const lastTodos = [];
        lastTodos.push(data);
        this.render.pushTodos(lastTodos);
        console.log(this.todos);
        this.render.resetInputsTitleDate();
      });
  }

  saveSingleTodo(id) {
    this.id = id; 
    const idObj = { id: this.id, completed: true };
    this.request
      .putTodo(idObj)
      .then((data) => data.json())
      .then(({ data }) => {
        if (data) {
         this.render.renderElementById(`todo${this.id}`);
         this.request
         .getTodos()
         .then((data) => data.json())
         .then(({ data }) => {
           this.todos = data; 
           console.log(this.todos);
        });
      }});  
  }

  deleteSingleTodo(id) {
    this.id = id; 
    const idObj = { id: this.id };
    this.request
      .deleteTodo(idObj)
      .then((data) => data.json())
      .then(({ data }) => {
        if (data === true) {
          this.render.removeElementById(`todo${this.id}`);
          this.request
          .getTodos()
          .then((data) => data.json())
          .then(({ data }) => {
            this.todos = data; 
            console.log(this.todos);
          });
        }
      });
  }

}