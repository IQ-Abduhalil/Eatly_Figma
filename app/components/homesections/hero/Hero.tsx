import "./hero.scss";
import Image from "next/image";
import Herobg from "../../../../public/assets/images/hero-bg.png";
import { memo } from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner flex items-center justify-between py-20 border-t-2">
        <div className="hero__left">
          <p className="hero__top-text uppercase">over 1000 users</p>
          <h1 className="hero__title">
            Enjoy Foods<span className="hero__title-none"> All</span> Over{" "}
            <span className="hero__title-none">The</span>
            <span className="hero__title--two">World</span>
          </h1>
          <p className="hero__text">
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a $20 bonus.
          </p>
          <button className="hero__btn">Get Started</button>
        </div>
        <div className="hero__right">
          <Image src={Herobg} alt="hero-bg"></Image>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
