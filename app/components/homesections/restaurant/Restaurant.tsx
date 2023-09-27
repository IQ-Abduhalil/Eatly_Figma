import "./restaurant.scss";
import Image from "@/node_modules/next/image";
import Rest from "../../../../public/assets/images/restaurant.png";
import Star from "../../../../public/assets/icons/Star.svg";
import Mark from "../../../../public/assets/icons/Bookmark.svg";
import { memo } from "react";

const Restaurant = () => {
  return (
    <section>
      <div className="container restaurant border-t-2">
        <div className="restaurant__inner ">
          <Image className="restaurant__img" src={Rest} alt="image"></Image>
          <div className="restaurant__bottom flex justify-between items-center">
            <p className="restaurant__title">The Chicken King</p>
            <div className="flex gap-3 items-center">
              <p className="restaurant__text">24min •</p>
              <Image src={Star} alt="starimg"></Image>
              <p className="restaurant__text">4.8</p>
            </div>
            <Image src={Mark} alt="img"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Restaurant);
