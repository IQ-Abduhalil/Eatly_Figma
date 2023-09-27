"use client";
import { createContext, useState } from "react";

export type TodoContextType = {
  saveTodo: () => void;
  updateTodo: (id: number) => void;
};
const CartContext = createContext<TodoContextType | null>(null);

function CartProvider({ children }: any) {
  const cartLocal: any = window.localStorage.getItem("mycart");

  const [cart, setCart] = useState<any>(JSON.parse(cartLocal));
  window.localStorage.setItem("mycart", JSON.stringify(cart));

  let values: any = {
    cart,
    setCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
