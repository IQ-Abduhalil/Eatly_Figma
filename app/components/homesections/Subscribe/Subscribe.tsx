import Image from "next/image";
import { memo } from "react";
import Subscribe_Bg_Iconssss from "../../../../public/assets/icons/Subscribe_Bg_Iconssss.png";
import Image_Subscribe from "../../../../public/assets/images/Image_Subscribe.png";

const Subscribe = () => {
  return (
    <section className="flex px-24 pb-[13.5rem]       xxs:px-[0.5rem] xs:px-[0.575rem] sm:px-[1.875rem] md:px-[1.875rem]">
      <div className="relative flex bg-[#5C4EAE] rounded-[1.875rem] w-full h-[17.5rem] pb-[3.813rem] sm:pb-[22rem]">
        <div className="flex  xxs:h-[16.061rem]">
          <Image
            className="w-[50%]"
            src={Subscribe_Bg_Iconssss}
            alt="Subscribe_Bg_Iconssss"
          />
          <Image
            className="w-[50%]"
            src={Subscribe_Bg_Iconssss}
            alt="Subscribe_Bg_Iconssss"
          />
        </div>
        <div className="absolute top-[0rem] left-[0rem] flex justify-between      xxs:flex xxs:flex-col xxs:items-center xxs:gap-[1.688rem]     xs:flex xs:flex-col xs:items-center xs:gap-[1.888rem]       sm:flex sm:flex-col sm:gap-[2rem]">
          <div className="flex flex-col gap-[3.563rem] pt-[4.313rem] pl-[4.125rem]    xxs:px-[0.5rem]">
            <h2 className="text-[#FFFFFF] text-[4.375rem] font-extrabold leading-[1.597rem]            xxs:text-[2.59rem]  xs:text-[2.59rem]   sm:text-[2.59rem]">
              GET 50%
            </h2>
            <form className="flex py-[0.453rem] bg-[#FFFFFF] items-center rounded-[0.89rem] pl-[0.89rem] pr-[0.397rem]">
              <input
                required
                type="email"
                placeholder="Enter Your Email Address"
                className="pl-[0.4rem]    xxs:py-[1rem]  xxs:py-[0.938rem]         xxs:text-[0.661rem]       xs:text-[0.661rem]"
              />
              <button
                className="btn rounded-[0.703rem] text-[#F7F8FA] bg-[#6C5FBC] px-[1.563rem] py-[1rem]          xxs:text-[0.661rem]   xs:text-[0.661rem]"
                type="submit"
              >
                subscribe
              </button>
            </form>
          </div>
          <div className="flex mx-auto">
            <Image
              className="xxs:w-[10.591rem]  xxs:h-[10.591rem]       xs:w-[10.591rem]  xs:h-[10.591rem]"
              src={Image_Subscribe}
              alt="Image_Subscribe"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Subscribe);
