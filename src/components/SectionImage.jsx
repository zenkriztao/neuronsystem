import { card, cs } from "../assets";
import styles, { layout } from "../style";

const SectionImage = () => (
  <section className={`${styles.padding} ${styles.flexCenter} flex-col relative `}>
    <div className={layout.sectionImgBanner}>
      <img src={cs} alt="billing" className="w-auto h-[300px]" />
    </div>
  </section>
);

export default SectionImage;  
