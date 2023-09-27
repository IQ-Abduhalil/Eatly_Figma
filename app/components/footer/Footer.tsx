import React, { memo } from "react";
import "./footer.scss";
import Logo from "../../../public/assets/icons/Logo.svg";
import Logo2 from "../../../public/assets/icons/eatly.svg";
import Image from "@/node_modules/next/image";
import Link from "next/link";
import Sites from "../../../public/assets/images/SitesLink.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-20">
        <Link
          href={"/home"}
          className="footer__top pb-8  flex gap-2  items-center"
        >
          <Image src={Logo} alt="logo"></Image>
          <Image src={Logo2} alt="logo"></Image>
        </Link>
        <div className="footer__bottom flex justify-between items-center pt-14">
          <p className="footer__text">© 2023 EATLY All Rights Reserved.</p>
          <Image src={Sites} alt="image"></Image>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
