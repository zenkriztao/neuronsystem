import { kelas, gmeet, zoom } from "../assets";
import styles, { layout } from "../style";

import { Fade } from "react-reveal";
const Information = () => (
  <Fade right>
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={kelas}
          alt="kelas"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          Konsep Belajar dengan video animasi{" "}
        </h2>
        <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
          Konsep video interaktif dapat membantu mempermudah pemahaman dalam
          menyerap materi.
        </p>
        <div className="flex sm:mt-10 mt-6">
          <img
            src={gmeet}
            alt="gmeet"
            className="w-[144.86px] h-[50.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={zoom}
            alt="zoom"
            className="w-[144.17px] h-[50.08px] object-contain cursor-pointer"
          />
        </div>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6"></div>
      </div>
    </section>
  </Fade>
);

export default Information;
