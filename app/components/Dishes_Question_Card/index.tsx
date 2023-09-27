import { memo } from "react";
import Image from "next/image";
import Plus_Icon_Question_Box from "../../../public/assets/icons/Add.svg";
import { AllpropsType } from "@/app/types";

const Dishes_Question_Card = ({
  Question_Title,
  Question_subTitle,
}: AllpropsType) => {
  return (
    <div className="flex flex-col gap-[1.221rem] pt-[1.797rem] pb-[2.704rem] px-[1rem] border-b-[0.066rem] border-b-[#ADADAD] ">
      <div className="flex justify-between">
        {Question_Title ? (
          <h2 className="text-[#323142] text-[1.464rem] font-semibold leading-[3.703rem]">
            {Question_Title}
          </h2>
        ) : null}
        <button type="button" className="cursor-pointer">
          <Image
            className="w-[1.883rem] h-[1.883rem]"
            src={Plus_Icon_Question_Box}
            alt="Plus_Icon_Question_Box"
          />
        </button>
      </div>
      <div className="">
        {Question_subTitle ? (
          <p className="text-[#686868] text-[1.25rem] font-normal leading-[2rem] tracking-tighter-[0.013rem]">
            {Question_subTitle}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default memo(Dishes_Question_Card);
