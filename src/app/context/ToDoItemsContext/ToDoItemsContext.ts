// "use client";
import { ToDoContextState } from "@/utility/CustomTypes";
import { createContext } from "react";

const toDoItemsContext = createContext<ToDoContextState>({
  toDos: [],
  addToDo: () => {},
});

export default toDoItemsContext;
