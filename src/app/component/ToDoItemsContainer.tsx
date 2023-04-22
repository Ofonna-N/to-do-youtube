"use client";
import useToDoItemsContext from "../customHooks/useToDoItemsContext";
import RoundedContainer from "./RoundedContainer";
import ToDoItem from "./ToDoItem";

// const database = [
//   "Subscribe to my channel",
//   "Hit the like button",
//   "Share the video",
// ];
const ToDoItemsContainer = () => {
  const toDosCtx = useToDoItemsContext();

  return (
    <RoundedContainer className="bg-bg-cust-dark2 p-[2rem]">
      {toDosCtx.toDos.length <= 0 ? (
        "To do list Empty"
      ) : (
        <h3 className="text-[3rem] mb-[1rem]">To Dos</h3>
      )}
      <ul className="flex flex-col gap-[1rem]">
        {toDosCtx.toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDoItem toDo={toDo} />
          </li>
        ))}
      </ul>
    </RoundedContainer>
  );
};

export default ToDoItemsContainer;
