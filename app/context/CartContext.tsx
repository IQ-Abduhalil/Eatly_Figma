"use client";
import { createContext, useEffect, useState } from "react";
import { AllpropsType } from "../types";

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
null;
const CartContext = createContext<TodoContextType>();

function CartProvider({ children }: any) {
  const cartLocal = window.localStorage.getItem("mycart");

  const [cart, setCart] = useState(JSON.parse(cartLocal));
  window.localStorage.setItem("mycart", JSON.stringify(cart));

  let values: AllpropsType = {
    cart,
    setCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
