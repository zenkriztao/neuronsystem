import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] bg-[#ffffff] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
    <div className="px-10 py-5 rounded-[20px] bg-[#D6E3F4] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
      <div className="flex flex-col justify-center items-center">
      <img src={img} alt={name} className="w-[80px] h-[80px] rounded-full" /> 
      <h4 className="font-poppins font-bold text-[20px] leading-[32px] text-[#052f85] py-5">
          {name}
        </h4>
        </div>
        </div>
    <p className="font-poppins font-medium text-[16px] leading-[32.4px] text-black my-1">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
