import { promo } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

import { Fade } from "react-reveal";

const Banner = () => (
  <section
    id="banner"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] p-10">
      <Fade left>
        <h2 className={styles.heading}>Paket Belajar Neuron</h2>{" "}
      </Fade>
      <Fade right>
        <p className={` ${styles.paragraph2} justify-center `}>
          Ayo jangan sampai lewatkan promo-promo menarik dari Neuron!,.
        </p>{" "}
      </Fade>
    </div>{" "}
  </section>
);

export default Banner;
