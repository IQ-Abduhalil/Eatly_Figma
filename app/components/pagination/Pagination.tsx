"use client";
import "./pagination.scss";
import { memo, useEffect, useState } from "react";
import Star from "../../../public/assets/icons/Star.svg";
import Addbtn from "../../../public/assets/icons/Add.svg";
import Image from "next/image";
import Heart from "../../../public/assets/icons/Heart.svg";
import View from "../../../public/assets/icons/View-all.svg";
import { useDishesStore } from "@/app/store/getDishes";
import Loading from "../loading/Loading";
import { Dish } from "@/app/types";

function Pagination() {
  const dishes = useDishesStore((state: any) => state.dishes);
  const loading = useDishesStore((state: any) => state.loading);
  const error = useDishesStore((state: any) => state.error);
  const fetchDishes = useDishesStore((state: any) => state.fetchDishes);

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

  useEffect(() => {
    fetchDishes();
  }, []);
  const ApiUrl = "http://207.154.221.44:4002";
  return (
    <>
      <section className="dishes">
        <div className="container">
          <h4 className="dishes__title">
            Our Top <span className="dishes__title--two">Dishes</span>
          </h4>
          {loading ? <Loading /> : null}
          {dishes.length > 0 ? (
            <div>
              <ul className="dishes__cards flex justify-around">
                {records.map((dish: any, index: number) => (
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
                        // onClick={() =>
                        //   set(
                        //     cart !== null
                        //       ? [
                        //           ...cart,

                        //           {
                        //             image: dish.image,
                        //             price: dish.price,
                        //             mark: dish.mark,
                        //             id: dish.id,
                        //             time: dish.time,
                        //             name: dish.name,
                        //           },
                        //         ]
                        //       : [
                        //           {
                        //             image: dish.image,
                        //             price: dish.price,
                        //             mark: dish.mark,
                        //             id: dish.id,
                        //             time: dish.time,
                        //             name: dish.name,
                        //           },
                        //         ]
                        //   )
                        // }
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
      </section>
    </>
  );
}

export default memo(Pagination);
