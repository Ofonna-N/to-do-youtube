"use client";

import useToDoItemsContext from "../customHooks/useToDoItemsContext";
import { useRef, useState } from "react";

const SearchBar = () => {
  const [textFieledInput, setTextFieldInput] = useState("");
  const toDoCtx = useToDoItemsContext();

  const toDoInputRef = useRef<HTMLInputElement>(null);

  const AddToDoItem = () => {
    const randId = Math.random() * 5000 + 1;

    toDoCtx.addToDo({
      id: randId.toString(),
      toDo: toDoInputRef.current?.value || "error getting to do",
    });

    setTextFieldInput("");
  };

  return (
    <div className="relative ">
      <form
        className="relative overflow-hidden rounded-[0.35rem]"
        onSubmit={(e) => {
          e.preventDefault();
          AddToDoItem();
        }}
      >
        <label className="flex bg-red-800">
          <input
            className="w-full py-[0.5rem] pl-[1rem] text-bg-cust-dark bold"
            type="text"
            id="todosearch"
            ref={toDoInputRef}
            placeholder="Enter To Do"
            maxLength={70}
            required
            value={textFieledInput}
            onChange={(e) => {
              setTextFieldInput(e.target.value);
            }}
          />
          <button
            className="px-[2rem] self-stretch bg-bg-cust-accent-orange1"
            // onClick={() => AddToDoItem()}
          >
            ADD
          </button>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
