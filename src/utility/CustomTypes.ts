export interface ToDo {
  id: string;
  toDo: string;
}

export interface ToDoContextState {
  toDos: ToDo[];
  addToDo: (payload: ToDo) => void;
  deleteToDo: (id: string) => void;
}
