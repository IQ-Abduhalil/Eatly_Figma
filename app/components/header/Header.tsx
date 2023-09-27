"use client";
import "./header.scss";
import React, { memo, useState } from "react";
import Logo from "../../../public/assets/icons/Logo.svg";
import Eatly from "../../../public/assets/icons/eatly.svg";
import Cart from "../../../public/assets/icons/cart-icon.svg";
import Image from "next/image";
import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";

function Header() {
  const authToken = sessionStorage.getItem("authToken");
  const pathname = usePathname();

  const [token, setToken] = useState(true);
  function handleremoveItem() {
    localStorage.removeItem("authToken");
    setToken(!token);
  }
  return (
    <header>
      <div className="container flex items-center justify-between pt-10 pb-8">
        <div className="header__left flex gap-24 items-center">
          <div className="flex items-center gap-3">
            <Link href="/home">
              <Image src={Logo} alt="eatly-logo" />
            </Link>
            <Link href="/home">
              <Image src={Eatly} alt="eatly-logo" />
            </Link>
          </div>
          <nav>
            <ul className="header__left-list flex gap-14">
              <li className="header__item">
                <Link href="/home">Home</Link>
              </li>
              <li className="header__item">
                <Link href="/dishes">Dishes</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right flex items-center gap-2">
          <Link href="/cart">
            <Image className="cursor-pointer" src={Cart} alt="cart-img" />
          </Link>
          {/* <Link href="/login" className="header__btn">
            Login
          </Link>
          <Link href="/" className="header__btn header__btn--two">
            Sign in
          </Link> */}
          {/* <Link
            onClick={() => window.localStorage.removeItem("authToken")}
            href="/"
            className="header__btn header__btn--two"
          >
            Log out */}
          {/* </Link> */}

          {token ? (
            <button
              onClick={handleremoveItem}
              className="hover:text-white hover:bg-red-400 hover:font-semibold font-medium text-red-400 px-[1.189rem] py-[0.793rem] border rounded-[0.792rem]"
              type="button"
            >
              Log Out
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className={`header__btn header__btn--two ${
                  pathname === "/login" ? " animate-bounce" : ""
                }`}
              >
                Login
              </Link>
              <Link
                href="/"
                className={`header__btn header__btn--two ${
                  pathname === "/register" ? " animate-bounce" : ""
                }`}
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
        <div className="navbars">
          <nav className="navbar">
            <div className=" nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/dishes">dishes</a>
                </li>
                <li>
                  <a href="/carts">carts</a>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
