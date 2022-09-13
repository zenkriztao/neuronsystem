import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const SectionImage = () => (
  <section className={layout.section}>
    <div className={layout.sectionImgBanner}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SectionImage;
