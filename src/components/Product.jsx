import styles, { layout } from "../style";

import { Fade } from "react-reveal";

const Product = () => (
  <section
    id="banner"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
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

export default Product;
