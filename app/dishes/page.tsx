"use client";
import "./dishes.scss";
import { memo, useContext, useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import { useDishesStore } from "../store/getDishes";
import Star from "../../public/assets/icons/Star.svg";
import Addbtn from "../../public/assets/icons/Add.svg";
import Image from "next/image";
import Heart from "../../public/assets/icons/Heart.svg";
import View from "../../public/assets/icons/View-all.svg";
import SearchIcon from "../../public/assets/icons/search.svg";
import { SearchContext } from "../context/SearchContext";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FAQs_Dishes from "../components/FAQs_Dishes/index";
import { CartContext } from "../context/CartContext";

function Dishes() {
  const dishes = useDishesStore((state: any) => state.dishes);
  const loading = useDishesStore((state: any) => state.loading);
  const error = useDishesStore((state: any) => state.error);
  const fetchDishes = useDishesStore((state: any) => state.fetchDishes);

  const { search, setSearch } = useContext<any>(SearchContext);
  const { cart, setCart } = useContext<any>(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 4;
  const lastIndex = lastPage * currentPage;
  const firstIndex = lastIndex - lastPage;
  const records = dishes.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dishes.length / lastPage);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  // const cart = useCartStore((state: any) => state.myDish);
  // const set = useCartStore((state: any) => state.local);

  useEffect(() => {
    fetchDishes();
  }, []);
  const ApiUrl = "http://207.154.221.44:4002";
  return (
    <>
      <Header />
      <main>
        <section className="dishes">
          <div className="container">
            <form className="dishes__right-form">
              <label htmlFor="input">
                <Image src={SearchIcon} alt="search" />
              </label>
              <input
                id="input"
                className="header__right-input"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            {loading ? <Loading /> : null}
            {dishes.length > 0 ? (
              <div>
                <ul className="dishes__cards flex justify-around">
                  {records
                    .filter((item: any) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(search);
                    })
                    .map((dish: any, index: number) => (
                      <li className="dishes__card" key={index}>
                        <img
                          className="dishes__card-img"
                          src={`${ApiUrl}/${dish.image}`}
                          alt="img"
                        />
                        <Image
                          className="dishes__card-heart"
                          src={Heart}
                          alt="like"
                        />
                        <p className="dishes__card-type">{dish.type}</p>
                        <p className="dishes__card-name">{dish.name}</p>
                        <div className="flex gap-1 items-center mb-3">
                          <p className="dishes__card-time">{dish.time}</p>
                          <Image src={Star} alt="star-img" />
                          <p className="dishes__card-time">{dish.mark}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="dishes__card-price">${dish.price}</p>
                          <button
                            onClick={() =>
                              setCart(
                                cart !== null
                                  ? [
                                      ...cart,

                                      {
                                        image: dish.image,
                                        price: dish.price,
                                        mark: dish.mark,
                                        id: dish.id,
                                        time: dish.time,
                                        name: dish.name,
                                      },
                                    ]
                                  : [
                                      {
                                        image: dish.image,
                                        price: dish.price,
                                        mark: dish.mark,
                                        id: dish.id,
                                        time: dish.time,
                                        name: dish.name,
                                      },
                                    ]
                              )
                            }
                            className="dishes__card-btn"
                          >
                            <Image src={Addbtn} alt="img" />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
                <ul className="pagination flex justify-end gap-4  dishes__card-page ">
                  <li className="page-item">
                    <a className="page-link cursor-pointer" onClick={prePage}>
                      Prev
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link cursor-pointer" onClick={nextPage}>
                      <Image src={View} alt="next-image" />
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
            {error ? <p>{error}</p> : null}
          </div>
          <FAQs_Dishes />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default memo(Dishes);
