import { char, charInfo } from "../assets";
import styles, { layout } from "../style";

const SectionImage = () => (
  <section
    className={`${styles.padding} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
    <div className={layout.sectionImgBanner}>
      <img src={charInfo} alt="char" className="w-auto h-[400px]" />
      <div className={layout.sectionImgBanner}>
        <img src={char} alt="char" className="w-auto h-[400px]" />
      </div>
    </div>
  </section>
);

export default SectionImage;
