import { promo } from "../assets";
import { layout } from "../style";

const Promo = () => (
  <section className="flex md:flex-row flex-col sm:py-1 py-1">
    <div className={` ${layout.sectionImg} `}>
      <img
        src={promo}
        alt="promo"
        className="w-auto h-[80%] rounded-[20px] cursor-pointer"
      />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={promo}
        alt="promo"
        className="w-auto h-[80%] rounded-[20px] cursor-pointer"
      />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={promo}
        alt="promo"
        className="w-auto h-[80%] rounded-[20px] cursor-pointer"
      />
    </div>
  </section>
);

export default Promo;
