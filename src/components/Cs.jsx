import { cs } from "../assets";
import styles, { layout } from "../style";

import { Fade } from "react-reveal";

const Cs = () => (
  <Fade bottom>
    <section
      className={`${styles.padding} ${styles.flexCenter} flex-col relative cursor-pointer`}
    >
      <h2 className="font-poppins font-semibold xs:text-[42px] text-[20px] text-[#052f85] xs:leading-[36.8px] leading-[66.8px] p-5">
        Kamu bingung tentang paket? Yuk tanya Cs kami
      </h2>{" "}
      <div className={layout.sectionImgBanner}>
        <img
          src={cs}
          alt="cs"
          className="w-auto h-[300px] bg-white rounded-r-[30px] rounded-3xl"
        />
      </div>
    </section>
  </Fade>
);

export default Cs;
