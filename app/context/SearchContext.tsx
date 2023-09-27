"use client";
import { createContext, useState } from "react";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};

const SearchContext = createContext<TodoContextType>(null);

function SearchProvider({ children }: any) {
  const [search, setSearch] = useState("");

  let values: any = {
    search,
    setSearch,
  };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
