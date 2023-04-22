"use client";
import React, { useState } from "react";
import RoundedContainer from "./RoundedContainer";
import { AiOutlineCloseSquare } from "react-icons/ai";
import useToDoItemsContext from "../customHooks/useToDoItemsContext";
import { ToDo } from "@/utility/CustomTypes";

interface Props {
  toDo: ToDo;
}

const ToDoItem: React.FC<Props> = ({ toDo }) => {
  const [completed, setCompleted] = useState(false);

  const toDoCtx = useToDoItemsContext();

  const toDoClickHandler = () => {
    setCompleted((prev) => !prev);
  };

  return (
    <RoundedContainer className="bg-bg-cust-accent-orange1 p-[1rem]">
      <label
        className="flex justify-between gap-2 cursor-pointer"
        htmlFor={toDo.id}
      >
        <input
          className="w-[2rem] cursor-pointer"
          type="checkbox"
          id={toDo.id}
          onChange={(e) => {
            toDoClickHandler();
          }}
          checked={completed}
        />
        <span
          className={` py-[0.25rem] px-[1rem] grow-[2] ${
            completed ? "line-through" : ""
          } select-none`}
        >
          {toDo.toDo}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toDoCtx.deleteToDo(toDo.id);
          }}
        >
          <AiOutlineCloseSquare className="text-red-700 text-[2.5rem]" />
        </button>
      </label>
    </RoundedContainer>
  );
};

export default ToDoItem;
