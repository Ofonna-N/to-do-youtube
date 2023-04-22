"use client";

import { ToDoContextState, ToDo } from "@/utility/CustomTypes";
import React, { useState } from "react";
import toDoItemsContext from "./ToDoItemsContext";

interface Props {
  children: React.ReactNode;
}

const ToDoItemsContextProvider: React.FC<Props> = ({ children }) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDo = (payload: ToDo) => {
    setToDos((prev) => [...prev, payload]);
  };

  const deleteToDo = (id: string) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toDoContext: ToDoContextState = {
    toDos,
    addToDo,
    deleteToDo,
  };
  // const [state, dispach] = useReducer(reducer, {
  //   toDoItems: [
  //     "Subscribe to my channel",
  //     "Hit the like button",
  //     "Share the video",
  //   ],
  //   dispach: toDoDispach,
  // });

  return (
    <toDoItemsContext.Provider value={toDoContext}>
      {children}
    </toDoItemsContext.Provider>
  );
};

export default ToDoItemsContextProvider;

// {
//     toDoItems: [
//       "Subscribe to my channel",
//       "Hit the like button",
//       "Share the video",
//     ],
//     dispach: (action: { type: string; payload: {} }) => {},
// }
