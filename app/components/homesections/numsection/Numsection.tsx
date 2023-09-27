import { memo } from "react";
import "./numsection.scss";

const Numsection = () => {
  return (
    <section className="num">
      <div className="container py-14">
        <ul className="num__list flex justify-between items-center px-36">
          <li>
            <p className="num__item-title uppercase">10 k+</p>
            <p className="num__item-text">
              Satisfied Costumers All Great Over The World{" "}
            </p>
          </li>

          <li>
            <p className="num__item-title uppercase">4M</p>
            <p className="num__item-text">
              Healthy Dishes Sold Including Milk Shakes Smooth
            </p>
          </li>

          <li>
            <p className="num__item-title uppercase">99.99%</p>
            <p className="num__item-text">
              Reliable Customer Support We Provide Great Experiences
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default memo(Numsection);
