import React, { memo } from "react";
import "./purchase.scss";
import Food from "../../../../public/assets/images/purchase1.png";
import Image from "@/node_modules/next/image";
import Carts from "../../../../public/assets/icons/expense.svg";
import Carts2 from "../../../../public/assets/icons/expense2.svg";
import Devider from "../../../../public/assets/icons/divider.svg";
import Devider2 from "../../../../public/assets/icons/divider (1).svg";

function Purchase() {
  return (
    <section className="purchase">
      <div className="container">
        <div className="purchase__inner flex justify-between items-center py-24 border-t-2 border-b-2">
          <div className="purchase__left">
            <p className="purchase__title">
              Control <span className="purchase__title--inner">Purchases</span>{" "}
              Via Dashboard
            </p>
            <div className="purchase__card  mb-4">
              <Image src={Food} alt="img"></Image>
              <div>
                <p className="purchase__card-title">Chicken Hell</p>
                <p className="purchase__card-text">On The Way</p>
              </div>
              <p className="purchase__card-time">3.44 pm</p>
            </div>

            <div className="purchase__card purchase__card--top mb-4">
              <Image src={Food} alt="img"></Image>
              <div>
                <p className="purchase__card-title">Swe Dish</p>
                <p className="purchase__card-text">Delivered</p>
              </div>
              <p className="purchase__card-time">Yesterday</p>
            </div>

            <div className="purchase__card purchase__card--top">
              <Image src={Food} alt="img"></Image>
              <div>
                <p className="purchase__card-title">Fish Hell Veg</p>
                <p className="purchase__card-text">Cancelled</p>
              </div>
              <p className="purchase__card-time">3.44 pm</p>
            </div>
          </div>
          <div className="purchase__right">
            <div className="flex mb-11 justify-between">
              <p className="purchase__right-title">Purchases</p>{" "}
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option disabled>This month</option>
                <option value="1">One month</option>
                <option value="2">Two month</option>
                <option value="3">Three month</option>
              </select>
            </div>
            <div className="purchase__right-card mb-5">
              <div className="purchase__right-inner flex justify-between mb-5 items-center gap-24">
                <div className="purchase__right-texts flex items-center gap-3">
                  <Image src={Carts} alt="img"></Image>
                  <p className="purchase__right-title">Expense</p>
                  <p className="purchase__right-text">Increased By 10%</p>
                </div>
                <p className="purchase__right-title">$409.00</p>
              </div>
              <Image src={Devider} alt="img"></Image>
            </div>

            <div className="purchase__right-card">
              <div className="purchase__right-inner flex justify-between mb-5 items-center gap-24">
                <div className="purchase__right-texts flex items-center gap-3">
                  <Image src={Carts2} alt="img"></Image>
                  <p className="purchase__right-title">Expense</p>
                  <p className="purchase__right-text">Increased By 10%</p>
                </div>
                <p className="purchase__right-title">$409.00</p>
              </div>
              <Image src={Devider2} alt="img"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Purchase);
