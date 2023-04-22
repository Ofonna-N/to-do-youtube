"use client";
import { useContext } from "react";
import toDoItemsContext from "../context/ToDoItemsContext/ToDoItemsContext";

const useToDoItemsContext = () => {
  const context = useContext(toDoItemsContext);

  return context;
};

export default useToDoItemsContext;
