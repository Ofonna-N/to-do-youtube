import RoundedContainer from "./component/RoundedContainer";
import SearchBar from "./component/SearchBar";
import ToDoItemsContainer from "./component/ToDoItemsContainer";
import ToDoItemsContextProvider from "./context/ToDoItemsContext/ToDoItemsContextProvider";

export default function Home() {
  return (
    <ToDoItemsContextProvider>
      <main className="w-[60rem] mx-auto mt-[13rem]">
        <RoundedContainer className="bg-bg-cust-dark p-[6rem]">
          <h1 className="text-center text-[6rem] mb-4">To Do App</h1>
          <RoundedContainer className="bg-bg-cust-dark2 mb-[2rem] p-[2rem]">
            <SearchBar />
          </RoundedContainer>
          <ToDoItemsContainer />
        </RoundedContainer>
      </main>
    </ToDoItemsContextProvider>
  );
}
