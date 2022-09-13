import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={` ${layout.sectionImg} `}>
      <img src={card} alt="billing" className="w-auto h-[80%]" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-auto h-[80%]" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-auto h-[80%]" />
    </div>
  </section>
);

export default CardDeal;
