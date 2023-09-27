"use client";
import { createContext, useState } from "react";

export type TodoContextType = {
  saveTodo: () => void;
  updateTodo: (id: number) => void;
};
const CartContext = createContext<TodoContextType | null>(null);

function CartProvider({ children }: any) {
  // if (typeof localStorage !== "undefined") {
  //   // Access and use localStorage here
  //   const cartLocal: any = localStorage.getItem("mycart");
  //   localStorage.setItem("mycart", JSON.stringify(cart));
  // } else {
  //   console.log("localStorage is not available.");
  // }

  const [cart, setCart] = useState<any>([]);

  let values: any = {
    cart,
    setCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
