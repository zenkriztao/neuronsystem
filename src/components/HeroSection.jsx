import { hero } from "../assets";
import styles, { layout } from "../style";

import Fade from "react-reveal/Fade";

import ButtonSection from "./ButtonSection";

const HeroSection = () => (
  <section id="product" className={layout.sectionReverse}>
    <Fade left>
      <div className={layout.sectionImgReverse}>
        <img
          src={hero}
          alt="hero"
          className="w-[100%] h-[100%] relative z-[5]"
        />

      </div>
    </Fade>
    <Fade right>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          <span className="text-gradient">Neuron system </span>
          <h2 className={styles.heading1}> - Bimbel terbaik di Indonesia </h2>
        </h2>
        <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
          Dengan standar kurikulum yang selalu di perbaharui seiring
          berkembangnya sistem pedidikan dan metode yang mendukung dengan
          menggabungkan proses pembelajaran dan teknologi, Neuron membantu
          masalah yang di hadapi setiap generasi muda dengan terus berinovasi
          dan membangun semangat motivasi untuk terus selalu memberikan hasil
          yang terbaik.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <ButtonSection />
        </div>
      </div>
    </Fade>
  </section>
);

export default HeroSection;
