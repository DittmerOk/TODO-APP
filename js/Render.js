export class Render {
    constructor(app) {
      this.todos = document.querySelector(".todos");
      this.app = app;
    }
  
    pushTodos(todos) {
   
      todos.forEach((element) => {
        //{id:'', title:'', completed:'', date:''}
        const div = document.createElement("div");
        div.setAttribute('id', `todo${element.id}`);

        const title = document.createElement("p");
        title.textContent = element.title;
        const date = document.createElement("p");
        date.textContent = element.date;
  
        const buttonSave = document.createElement("button");
        if (element.completed) {
          title.classList.add('done-todo');
          date.classList.add('done-todo');
          buttonSave.setAttribute("disabled", true);
        }
        buttonSave.textContent = "Done";
        this.addSaveEvent(buttonSave, element.id);
  
        const buttonDelete = document.createElement("button");
        this.addDeleteEvent(buttonDelete, element.id);
        buttonDelete.textContent = "Delete";
  

        const styleViewTodosItem = [
          { name: div, arrClasses: ['td-item']},
          { name: title, arrClasses: ['td-item-title']},
          { name: date, arrClasses: ['td-item-date']},
          { name: buttonSave, arrClasses: ['td-item-buttonSave','td-item-button']},
          { name: buttonDelete, arrClasses: ['td-item-buttonDelete', 'td-item-button']},
        ];
        styleViewTodosItem.forEach( item => {
          this._setTodosClasses(item.name, item.arrClasses);
        });

        div.appendChild(title);
        div.appendChild(date);
        div.appendChild(buttonSave);
        div.appendChild(buttonDelete);
  
        this.todos.appendChild(div);
      });
    }
  
    _setTodosClasses(name, arrClasses) {
      for (let item of arrClasses ) {
        name.classList.add(item);
      }
    }

    resetInputsTitleDate(){
      const inputTitleRef = document.querySelector(".title");
      const inputDateRef = document.querySelector(".date");
      inputTitleRef.value = "";
      inputDateRef.value = "";
    }

    addSaveEvent(element, id) {
      element.addEventListener("click", () => {
        this.app.saveSingleTodo(id);
      });
    }
  
    addDeleteEvent(element, id) {
      element.addEventListener("click", () => {
        this.app.deleteSingleTodo(id);
      });
    }

    removeElementById(idName) {
      const elementRef = document.querySelector(`#${idName}`);
      elementRef.remove();
    }

    renderElementById(idName) {
     const elementRef = document.querySelector(`#${idName}`);
     elementRef.classList.add('done-todo');
     const buttonRef = document.querySelector(`#${idName} > .td-item-buttonSave`);
     buttonRef.setAttribute("disabled", true);
    }
    
  }
  