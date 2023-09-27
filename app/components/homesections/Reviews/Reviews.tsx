import { memo } from "react";
import Image from "next/image";
import Human_Img_Purchase from "../../../../public/assets/icons/human.svg";
import Stars_Reviews from "../../../../public/assets/icons/Stars.svg";
import Quote_Icon from "../../../../public/assets/icons/Quote.svg";
import divider from "../../../../public/assets/icons/divider.svg";

const Revievs = () => {
  return (
    <section
      className="RReview_Section          xxs:px-[0.5rem] xs:px-[0.575rem] sm:px-[1.875rem]"
      id="About_Section"
    >
      <div className="container">
        <div className="flex flex-col pt-[7.25rem] pb-[13.563rem] gap-[5rem]">
          <h2 className="text-[#6C5FBC] text-[2.813rem] font-semibold leading-[1.597rem] flex flex-wrap justify-center          xxs:text-[1.875rem] xxs:font-semibold xxs:leading-[2.25rem]            xs:text-[1.875rem] xs:font-semibold xs:leading-[2.25rem]              sm:text-[1.875rem] sm:font-semibold sm:leading-[2.25rem]">
            Customer<span className="text-[#323142] px-[1rem]">Say</span>
          </h2>
          <ul className="flex justify-between gap-[2.875rem]   xxs:grid xxs:grid-cols-1   xs:grid xs:grid-cols-1       sm:grid sm:grid-cols-1          md:grid md:grid-cols-1">
            <li className="flex">
              <div className="flex  gap-[9.692rem] items-center py-[7.5remm]">
                <ul className="flex flex-col rounded-[1.257rem] shadow-2xl gap-[2.375rem] px-[2.688rem] py-[2.375rem]">
                  <li className="">
                    <ul className="flex  gap-[9.692rem] items-center py-[7.5remm]">
                      <li className="">
                        <ul className="flex gap-[1.438rem]">
                          <Image
                            className="rounded-[50%]  xxs:w-[3.125rem] xxs:h-[3.125rem]"
                            src={Human_Img_Purchase}
                            alt="Human_Img_Purchase"
                          />
                          <ul className="">
                            <li className="">
                              <span className="text-[#030314] text-[1.306rem] font-medium leading-[1.959rem]              xxs:text-[0.778rem] xxs:font-medium xxs:leading-[1.167rem]           xs:text-[0.778rem] xs:font-medium xs:leading-[1.167rem]                sm:text-[2.1rem] sm:font-semibold sm:leading-[1.167rem]">
                                Alexander R.
                              </span>
                            </li>
                            <li className="">
                              <span className="text-center text-[#5E5D5D] text-[1.045rem] font-medium leading-[1.632rem]           xxs:text-[0.622rem] xxs:font-medium xxs:leading-[0.973rem]          xs:text-[0.622rem] xs:font-medium xs:leading-[0.973rem]            sm:text-[0.922rem] sm:font-semibold sm:leading-[0.973rem]">
                                01 Year With Us
                              </span>
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <li className="">
                        <Image
                          className="xxs:w-[2.186rem] xxs:h-[1.648rem]          xs:w-[2.186rem] xs:h-[1.648rem]             sm:w-[2.186rem] sm:h-[1.648rem]"
                          src={Quote_Icon}
                          alt="Quote_Icon"
                        />
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <span className="inline-block max-w-[27.625rem] italic text-[#636363] text-[1.125rem] font-normal leading-[1.632rem]               xxs:text-[0.67rem] xxs:font-normal xxs:leading-[0.973rem]          xs:text-[0.67rem] xs:font-normal xs:leading-[0.973rem]               sm:text-[0.67rem] sm:font-normal sm:leading-[0.973rem]">
                      “ Online invoice payment helps companies save time, are
                      faster and save maximum effort for the clients and save
                      maximum effort. Online invoice payment helps companies
                      save time ”
                    </span>
                  </li>
                  <li className="">
                    <Image
                      className="h-[1.438rem]   xxs:w-[5.139rem] xxs:h-[0.857rem]         xs:w-[5.139rem] xs:h-[0.857rem]           sm:w-[5.139rem] sm:h-[0.857rem]"
                      src={Stars_Reviews}
                      alt="Stars_Reviews"
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex">
              <div className="flex flex-col justify-between     xxs:gap-[2rem]     xs:gap-[2rem]  sm:gap-[2rem]">
                <div className="">
                  <ul className="flex flex-col gap-[2rem] rounded-[1.257rem] shadow-2xl px-[2.688rem] py-[2.5rem]">
                    <li className="">
                      <span className="inline-block max-w-[27.625rem] italic text-[#636363] text-[1.125rem] font-normal leading-[1.632rem]">
                        “ Online invoice payment helps companies save time, are
                        faster and save maximum effort for the clients and save
                        maximum effort. Online invoice payment helps companies
                        save time ”
                      </span>
                    </li>
                    <li className="">
                      <Image
                        className="h-[1.438rem]"
                        src={Stars_Reviews}
                        alt="Stars_Reviews"
                      />
                    </li>
                  </ul>
                </div>
                <div className="">
                  <Image className="w-full" src={divider} alt="divider" />
                </div>
              </div>
            </li>
            {/* <Li className="">
                        <Div className="">
                            <Ul className="flex flex-col gap-[2rem] rounded-[1.257rem] shadow-2xl px-[2.688rem] py-[2.5rem]">
                                <Li className="">
                                    <Span className="inline-block max-w-[27.625rem] italic text-[#636363] text-[1.125rem] font-normal leading-[1.632rem]">
                                        “ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”
                                    </Span>
                                </Li>
                                <Li className="">
                                    <Image className="h-[1.438rem]" src={Stars_Reviews} alt="Stars_Reviews" />
                                </Li>
                            </Ul>
                        </Div>
                    </Li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(Revievs);
