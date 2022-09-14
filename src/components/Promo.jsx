import { promo } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Promo = () => (
  <section className="flex md:flex-row flex-col sm:py-1 py-1">
    <div className={` ${layout.sectionImg} `}>
      <img src={promo} alt="billing" className="w-auto h-[80%] rounded-[20px] cursor-pointer" />
    </div>
    <div className={layout.sectionImg}>
      <img src={promo} alt="billing" className="w-auto h-[80%] rounded-[20px] cursor-pointer" />
    </div>
    <div className={layout.sectionImg}>
      <img src={promo} alt="billing" className="w-auto h-[80%] rounded-[20px] cursor-pointer" />
    </div>
  </section>
);

export default Promo;
