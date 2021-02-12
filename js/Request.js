export class Request {
    constructor() {
      this.url = "http://localhost:4000/api/todos/";
    }
  
    getTodos() {
      return fetch(this.url);
    }

    postTodo(body) {
      return fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  
    putTodo(body) {
      return fetch(this.url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  
    deleteTodo(body) {
      return fetch(this.url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  }
  