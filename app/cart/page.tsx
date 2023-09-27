"use client";
import "./cart.scss";
import Image from "@/node_modules/next/image";
import React, { useContext, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext<any>(CartContext);

  // useEffect(() => {
  //   setCart(cart);
  // }, [handleDelete]);

  return (
    <>
      <Header />
      <main>
        <div className="container ">
          <div className="cart flex flex-col gap-4">
            {cart !== null ? (
              cart?.map((item: any) => (
                <div
                  className="cart__card"
                  key={Math.ceil(Math.random() * 50000)}
                >
                  <div className="cart__inner flex p-3 justify-between">
                    <div className="">
                      <p className="cart__name">{item[0].name}</p>
                      <p className="cart__price">{item[0].price}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        key={Math.ceil(Math.random() * 50000)}
                        className="cart__btn-minus"
                      >
                        -
                      </button>
                      {cart.length}
                      <button
                        key={Math.ceil(Math.random() * 50000)}
                        className="cart__btn-minus"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4>Hali sizga yoqgan mahsulot yo'q!!!</h4>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
