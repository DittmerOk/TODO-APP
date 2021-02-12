export class TodoCreator {
    constructor(app) {
      this.buttonCreate = document.querySelector(".btnCreate");
      this.inputTitle = document.querySelector(".title");
      this.inputDate = document.querySelector(".date");
      this.app = app;
    }
  
    addListners() {
      this.buttonCreate.addEventListener("click", this.addTodo.bind(this));
    }
  
    addTodo() {
      const title = this.inputTitle.value;
      const date = this.inputDate.value;
      const result = { title, date, completed: false };
      this.app.addTodo(result);
    }

  }
  