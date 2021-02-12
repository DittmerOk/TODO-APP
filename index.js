import { App } from "./js/App";
import { TodoCreator } from "./js/TodoCreator";

const app = new App();
const todoCreator = new TodoCreator(app);

app.loadTodos();
todoCreator.addListners();

