import { memo } from "react";
import Dishes_Question_Card from "../Dishes_Question_Card/index";

const FAQs_Dishes = () => {
  return (
    <div className="container pt-[6.5rem] pb-[6.248rem]">
      <div className="text-[2.813rem] font-semibold leading-[120%] flex flex-col pb-[5.328rem]">
        <h2 className="text-center text-[#323142]">Frequently Asked</h2>
        <span className="text-[#6C5FBC] text-center">Questions</span>
      </div>
      <Dishes_Question_Card
        Question_Title="How long does delivery take?"
        Question_subTitle="You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?"
      />
      <Dishes_Question_Card
        Question_Title="How long does delivery take?"
        Question_subTitle=""
      />
      <Dishes_Question_Card
        Question_Title="How long does delivery take?"
        Question_subTitle=""
      />
      <Dishes_Question_Card
        Question_Title="How long does delivery take?"
        Question_subTitle=""
      />
      <Dishes_Question_Card
        Question_Title="How long does delivery take?"
        Question_subTitle=""
      />
    </div>
  );
};

export default memo(FAQs_Dishes);
