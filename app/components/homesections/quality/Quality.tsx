import "./quality.scss";
import Mobile from "../../../../public/assets/images/quality-img.png";
import Right from "../../../../public/assets/icons/arrow-right.svg";
import Image from "next/image";
import { memo } from "react";

const Quality = () => {
  return (
    <section className="quality">
      <div className="container quality__inner flex gap-5 items-center justify-between py-28  ">
        <div className="quality__left">
          <Image src={Mobile} alt="mobile"></Image>
        </div>
        <div className="quality__right">
          <h4 className="quality__title">
            Premium <span className="quality__title--inner">Quality</span> For
            Your Health
          </h4>
          <ul className="quality__list">
            <li>
              <p className="quality__text">
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </p>
            </li>
            <li>
              <p className="quality__text">
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </p>
            </li>
          </ul>
          <button className="quality__btn flex items-center">
            <span>Download</span>{" "}
            <Image className="ms-1" src={Right} alt="img" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Quality);
